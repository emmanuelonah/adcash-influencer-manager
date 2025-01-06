import 'reflect-metadata';

import serverless from 'serverless-http';

import app from '../../src/app';

import { connectDb } from '../../src/db/index.db';

export const handler = async (event, context) => {
    try {
        await connectDb();

        const serverlessHandler = serverless(app);

        return serverlessHandler(event, context);
    } catch (error) {
        console.error('Error in serverless function:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
