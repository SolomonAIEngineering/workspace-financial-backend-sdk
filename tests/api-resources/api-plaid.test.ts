// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from '@solomon-ai/workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiPlaid', () => {
  // Mock server tests are disabled
  test.skip('createLink: only required params', async () => {
    const responsePromise = client.apiPlaid.createLink({ apiId: 'apiId' });
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
    const response = await client.apiPlaid.createLink({
      apiId: 'apiId',
      accessToken: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
      language: 'en',
      userId: '9293961c-df93-4d6d-a2cc-fc3e353b2d10',
    });
  });

  // Mock server tests are disabled
  test.skip('exchangeToken: only required params', async () => {
    const responsePromise = client.apiPlaid.exchangeToken({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
      apiId: 'apiId',
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
    const response = await client.apiPlaid.exchangeToken({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
      apiId: 'apiId',
      connectionName: 'connectionName',
      institutionName: 'institutionName',
    });
  });
});
