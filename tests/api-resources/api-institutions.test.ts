// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiInstitutions', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.apiInstitutions.list({ apiId: 'api_1234', countryCode: 'BE' });
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
    const response = await client.apiInstitutions.list({
      apiId: 'api_1234',
      countryCode: 'BE',
      connectionId: 'conn_123456789',
      limit: '50',
      q: 'Swedbank',
    });
  });

  // Mock server tests are disabled
  test.skip('updateUsage: only required params', async () => {
    const responsePromise = client.apiInstitutions.updateUsage('STARLING_SRLGGB3L', { apiId: 'api_1234' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateUsage: required and optional params', async () => {
    const response = await client.apiInstitutions.updateUsage('STARLING_SRLGGB3L', {
      apiId: 'api_1234',
      cached: true,
      connectionId: 'conn_1234567890',
      costUsd: 0.05,
      enrichmentType: 'detailed',
      modelUsed: 'llama-3.3-70b',
      provider: 'plaid',
      responseTimeMs: 850,
      transactionCount: 10,
      usageType: 'transaction_enrichment',
    });
  });
});
