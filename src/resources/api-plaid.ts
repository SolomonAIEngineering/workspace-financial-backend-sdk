// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * **Authentication & Authorization** - Secure API access management, token exchange, and provider connections for all banking providers
 */
export class APIPlaid extends APIResource {
  /**
   * Auth Link (Plaid)
   *
   * @example
   * ```ts
   * const response = await client.apiPlaid.createLink({
   *   apiId: 'apiId',
   * });
   * ```
   */
  createLink(body: APIPlaidCreateLinkParams, options?: RequestOptions): APIPromise<APIPlaidCreateLinkResponse> {
    return this._client.post('/v1/api.plaid/link', { body, ...options });
  }

  /**
   * Exchange token (Plaid)
   *
   * @example
   * ```ts
   * const response = await client.apiPlaid.exchangeToken({
   *   token: 'ojwmef9823f892n9h98h2efoqed9823hdodfcoj13er92hef',
   *   apiId: 'apiId',
   * });
   * ```
   */
  exchangeToken(body: APIPlaidExchangeTokenParams, options?: RequestOptions): APIPromise<APIPlaidExchangeTokenResponse> {
    return this._client.post('/v1/api.plaid/exchange', { body, ...options });
  }
}

export interface APIPlaidCreateLinkResponse {
  data: APIPlaidCreateLinkResponse.Data;
}

export namespace APIPlaidCreateLinkResponse {
  export interface Data {
    expiration: string;

    link_token: string;
  }
}

export interface APIPlaidExchangeTokenResponse {
  data: APIPlaidExchangeTokenResponse.Data;
}

export namespace APIPlaidExchangeTokenResponse {
  export interface Data {
    access_token: string;

    item_id: string;
  }
}

export interface APIPlaidCreateLinkParams {
  apiId: string;

  /**
   * Used when initiating the reconnect flow
   */
  accessToken?: string;

  language?: string;

  userId?: string;
}

export interface APIPlaidExchangeTokenParams {
  token: string;

  apiId: string;

  connectionName?: string;

  institutionName?: string;
}

export declare namespace APIPlaid {
  export {
    type APIPlaidCreateLinkResponse as APIPlaidCreateLinkResponse,
    type APIPlaidExchangeTokenResponse as APIPlaidExchangeTokenResponse,
    type APIPlaidCreateLinkParams as APIPlaidCreateLinkParams,
    type APIPlaidExchangeTokenParams as APIPlaidExchangeTokenParams
  };
}
