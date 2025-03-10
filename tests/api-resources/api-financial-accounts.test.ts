// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from 'workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiFinancialAccounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.apiFinancialAccounts.list({ provider: 'teller' });
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
    const response = await client.apiFinancialAccounts.list({
      provider: 'teller',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      accessToken: 'test_token_ky6igyqi3qxa4',
      institutionId: 'ins_109508',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.apiFinancialAccounts.delete('id', {
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.apiFinancialAccounts.delete('id', {
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
      accessToken: 'test_token_ky6igyqi3qxa4',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listBalances: only required params', async () => {
    const responsePromise = client.apiFinancialAccounts.listBalances({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
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
  test.skip('listBalances: required and optional params', async () => {
    const response = await client.apiFinancialAccounts.listBalances({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      provider: 'teller',
      accessToken: 'test_token_ky6igyqi3qxa4',
    });
  });
});
