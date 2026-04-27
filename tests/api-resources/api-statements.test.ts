// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiStatements', () => {
  // Mock server tests are disabled
  test.skip('retrievePdf: required and optional params', async () => {
    const response = await client.apiStatements.retrievePdf({
      accessToken: 'access-sandbox-123456-abcdef',
      accountId: '5f7a7464d6e268055f17e3a5',
      apiId: 'api_1234',
      provider: 'plaid',
      statementId: 'abcdef123456',
      teamId: 'team_67890',
      userId: 'user_12345',
    });
  });
});
