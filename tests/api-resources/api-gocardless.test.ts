// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({ bearerToken: 'My Bearer Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource apiGocardless', () => {
  // Mock server tests are disabled
  test.skip('createAgreement: only required params', async () => {
    const responsePromise = client.apiGocardless.createAgreement({
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    transactionTotalDays: 90,
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
  test.skip('createAgreement: required and optional params', async () => {
    const response = await client.apiGocardless.createAgreement({
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    transactionTotalDays: 90,
  });
  });

  // Mock server tests are disabled
  test.skip('createLink: only required params', async () => {
    const responsePromise = client.apiGocardless.createLink({
    agreement: '2dea1b84-97b0-4cb4-8805-302c227587c8',
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    redirect: 'http://www.yourwebpage.com',
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
  test.skip('createLink: required and optional params', async () => {
    const response = await client.apiGocardless.createLink({
    agreement: '2dea1b84-97b0-4cb4-8805-302c227587c8',
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    redirect: 'http://www.yourwebpage.com',
  });
  });

  // Mock server tests are disabled
  test.skip('exchangeToken: only required params', async () => {
    const responsePromise = client.apiGocardless.exchangeToken({
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    transactionTotalDays: 90,
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
  test.skip('exchangeToken: required and optional params', async () => {
    const response = await client.apiGocardless.exchangeToken({
    apiId: 'apiId',
    institutionId: 'REVOLUT_REVOGB21',
    transactionTotalDays: 90,
  });
  });
});
