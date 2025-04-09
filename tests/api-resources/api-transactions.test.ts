// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiTransactions', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.apiTransactions.list({ accountId: 'acct_1234567890', provider: 'stripe' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.apiTransactions.list({
      accountId: 'acct_1234567890',
      provider: 'stripe',
      accessToken: 'token-123',
      accountType: 'depository',
      latest: 'true',
      syncCursor: 'cursor-123',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listRecurring: only required params', async () => {
    const responsePromise = client.apiTransactions.listRecurring({
      accessToken: 'access-token-123',
      accountId: 'account-id-123',
      provider: 'plaid',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listRecurring: required and optional params', async () => {
    const response = await client.apiTransactions.listRecurring({
      accessToken: 'access-token-123',
      accountId: 'account-id-123',
      provider: 'plaid',
    });
  });
});
