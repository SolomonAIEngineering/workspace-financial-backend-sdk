// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { WorkspaceFinancialBackendSDK } from '../client';

export abstract class APIResource {
  protected _client: WorkspaceFinancialBackendSDK;

  constructor(client: WorkspaceFinancialBackendSDK) {
    this._client = client;
  }
}
