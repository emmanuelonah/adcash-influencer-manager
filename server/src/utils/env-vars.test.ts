import 'reflect-metadata';

import { envVars } from './env-vars.util';

describe('envVars', () => {
    it('should return configuration object', () => {
        expect(Object.keys(envVars).length).toBe(6);
    });
});
