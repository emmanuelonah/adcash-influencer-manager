import env from 'dotenv';
import envVar from 'env-var';

env.config();

export const envVars = {
    appName: envVar.get('ADCASH_INFLUENCER_MANAGER_APP_NAME').asString(),
    serverPort: envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_PORT').asPortNumber(),
    serverUrl:
        envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_URL').asUrlString() || 'http://localhost:8080',
    mongoDbUri: envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_MONGO_DB_URI').asString(),
    clientPort: envVar.get('ADCASH_INFLUENCER_MANAGER_CLIENT_PORT').asPortNumber(),
    clientUrl: envVar.get('ADCASH_INFLUENCER_MANAGER_CLIENT_URL').asUrlString(),
};
