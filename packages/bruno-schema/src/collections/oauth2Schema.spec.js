const { expect } = require('@jest/globals');
const { uuid } = require('../utils/testUtils');
const { oauth2Schema } = require('./index.js');

describe('Authentication oauth2 Schema validation', () => {
    it('oauth2 schema must validate successfully - valid auth params', async () => {
        const auth = {
            grantType: 'client_credentials',
            username: 'username',
            password: 'password',
            callbackUrl: 'http://localhost:3000',
            authorizationUrl: 'https://localhost:8080',
            accessTokenUrl: 'https://localhost:5000',
            clientId: uuid(),
            clientSecret: uuid(),
            scope: 'scope',
            state: 'state',
            pkce: true
        };

        const isValid = await oauth2Schema.validate(auth);
        expect(isValid).toBeTruthy();
    });
});