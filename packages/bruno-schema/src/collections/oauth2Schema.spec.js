const { expect } = require('@jest/globals');
const { oauth2Schema } = require('./index.js');

describe('Authentication oauth2 Schema validation', () => {
    it('oauth2 schema must validate successfully - valid auth params', async () => {
        const auth = {
            grantType: 'client_credentials',
            username: 'username',
            password: 'password',
            callbackUrl: 'callback_url',
            authorizationUrl: 'auth_url',
            accessTokenUrl: 'access_token_url',
            clientId: 'random_id',
            clientSecret: 'random_secret',
            scope: 'scope',
            state: 'state',
            pkce: true
        };

        const isValid = await oauth2Schema.validate(auth);
        expect(isValid).toBeTruthy();
    });
});