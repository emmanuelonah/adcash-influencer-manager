import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import cors, { CorsOptions } from 'cors';
import rateLimit from 'express-rate-limit';

import { envVars } from './utils';
import { HttpException } from './services';
import { apiRouterV1, apiRouterV1Path } from './routes';
import { serveClient, errorHandler } from './middlewares';

type Origin = string | undefined;
type OriginCb = (_error: Error | null, _allow?: boolean) => void;

const corsOptions: CorsOptions = {
    origin(origin: Origin, callback: OriginCb) {
        const isAllowed = origin && envVars.WHITE_LISTED_DOMAINS?.includes?.(origin);
        return isAllowed ? callback(null, true) : callback(new HttpException(500, 'Not allowed by CORS'));
    },
    optionsSuccessStatus: 200,
};

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(helmet());
app.use(rateLimit({ limit: 50, message: new HttpException(429, 'Request limit reach. Retry later.') }));
app.use(express.static(path.join(__dirname, '..', 'public', 'client-build')));
app.use(cors(corsOptions));

app.use(apiRouterV1Path, apiRouterV1);
app.use('/*', serveClient);
app.use(errorHandler);

export default app;
