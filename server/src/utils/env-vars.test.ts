import { envVars } from './env-vars.util';

describe('envVars', () => {
    it('should return configuration object', () => {
        expect(typeof envVars.appName).toBe('string');
        expect(typeof envVars.serverPort).toBe('number');
        expect(typeof envVars.serverUrl).toBe('string');
    });
});
