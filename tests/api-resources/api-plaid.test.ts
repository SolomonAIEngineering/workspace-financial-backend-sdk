// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WorkspaceFinancialBackendSDK from 'workspace-financial-backend-sdk';

const client = new WorkspaceFinancialBackendSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiPlaid', () => {
  // skipped: tests are disabled for the time being
  test.skip('createLink', async () => {
    const responsePromise = client.apiPlaid.createLink();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createLink: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apiPlaid.createLink(
        {
          accessToken: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
          language: 'en',
          userId: '9293961c-df93-4d6d-a2cc-fc3e353b2d10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WorkspaceFinancialBackendSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('exchangeToken: only required params', async () => {
    const responsePromise = client.apiPlaid.exchangeToken({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
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
  test.skip('exchangeToken: required and optional params', async () => {
    const response = await client.apiPlaid.exchangeToken({
      token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
    });
  });
});
