// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiTransactions', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.apiTransactions.list({ accountId: 'acct_1234567890', apiId: 'api_1234' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.apiTransactions.list({
      accountId: 'acct_1234567890',
      apiId: 'api_1234',
      accessToken: 'token-123',
      accountType: 'depository',
      connectionId: 'conn_123456789',
      latest: 'true',
      provider: 'stripe',
      syncCursor: 'cursor-123',
    });
  });

  // Mock server tests are disabled
  test.skip('listRecurring: only required params', async () => {
    const responsePromise = client.apiTransactions.listRecurring({
      accessToken: 'access-token-123',
      accountId: 'account-id-123',
      apiId: 'api_1234',
      provider: 'plaid',
      teamId: 'team_67890',
      userId: 'user_12345',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRecurring: required and optional params', async () => {
    const response = await client.apiTransactions.listRecurring({
      accessToken: 'access-token-123',
      accountId: 'account-id-123',
      apiId: 'api_1234',
      provider: 'plaid',
      teamId: 'team_67890',
      userId: 'user_12345',
    });
  });
});
