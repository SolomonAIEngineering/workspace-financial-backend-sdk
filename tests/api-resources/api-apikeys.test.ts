// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from 'workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiApikeys', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.apiApikeys.create({
      expiresAt: '2025-01-01T00:00:00Z',
      name: 'name',
      userId: 0,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.apiApikeys.create({
      expiresAt: '2025-01-01T00:00:00Z',
      name: 'name',
      userId: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.apiApikeys.list({ userId: '1' });
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
    const response = await client.apiApikeys.list({ userId: '1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.apiApikeys.revoke('id', { query_id: '1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke: required and optional params', async () => {
    const response = await client.apiApikeys.revoke('id', { query_id: '1' });
  });
});
