import { Router } from 'express';

import { influencerRouter } from './influencer/index.route';

/**
 * API Version 1
 */
const apiRouterV1 = Router();
const apiRouterV1Path = '/api/v1';

apiRouterV1.use('/influencers', influencerRouter);

export { apiRouterV1, apiRouterV1Path };
