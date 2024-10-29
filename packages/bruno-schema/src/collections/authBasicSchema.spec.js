const { expect } = require('@jest/globals');
const { authBasicSchema } = require('./index.js');

describe('Authentication Basic Schema validation', () => {
    it('auth basic schema must validate successfully - valid auth params', async () => {
        const auth = {
            username: 'username',
            password: 'password'
        };

        const isValid = await authBasicSchema.validate(auth);
        expect(isValid).toBeTruthy();
    });
});