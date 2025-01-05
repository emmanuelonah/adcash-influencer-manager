import env from 'dotenv';
import envVar from 'env-var';

env.config();

export const envVars = {
    appName: envVar.get('ADCASH_INFLUENCER_MANAGER_APP_NAME').asString() ?? 'Adcash Influencer Manager',
    serverPort: envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_PORT').asPortNumber(),
    serverUrl: envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_URL').asUrlString(),
    mongoDbUri: envVar.get('ADCASH_INFLUENCER_MANAGER_SERVER_MONGO_DB_URI').asString(),
    NODE_ENV: envVar.get('NODE_ENV').asString(),
    WHITE_LISTED_DOMAINS: envVar.get('ADCASH_INFLUENCER_MANAGER_WHITE_LISTED_DOMAINS').asArray(),
};
