// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIApikeys extends APIResource {
  /**
   * Create a new API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiApikeys.create({
   *   expiresAt: '2025-01-01T00:00:00Z',
   *   name: 'name',
   *   userId: 0,
   * });
   * ```
   */
  create(body: APIApikeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/v1/api.apikeys', { body, ...options });
  }

  /**
   * List all API keys
   *
   * @example
   * ```ts
   * const apiApikeys = await client.apiApikeys.list({
   *   userId: '1',
   * });
   * ```
   */
  list(query: APIApikeyListParams, options?: RequestOptions): APIPromise<APIApikeyListResponse> {
    return this._client.get('/v1/api.apikeys', { query, ...options });
  }

  /**
   * Revoke an API key
   *
   * @example
   * ```ts
   * const response = await client.apiApikeys.revoke('id', {
   *   query_id: '1',
   * });
   * ```
   */
  revoke(
    pathID: string,
    params: APIApikeyRevokeParams,
    options?: RequestOptions,
  ): APIPromise<APIApikeyRevokeResponse> {
    const { query_id } = params;
    return this._client.delete(path`/v1/api.apikeys/${pathID}`, { query: { id: query_id }, ...options });
  }
}

export interface APIKey {
  id: number;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string | null;

  /**
   * ISO 8601 timestamp
   */
  expiresAt: string;

  key: string;

  name: string | null;

  userId: number;
}

export interface APIApikeyListResponse {
  data: Array<APIKey>;
}

export interface APIApikeyRevokeResponse {
  success: boolean;
}

export interface APIApikeyCreateParams {
  /**
   * ISO 8601 timestamp
   */
  expiresAt: string;

  name: string | null;

  userId: number;
}

export interface APIApikeyListParams {
  /**
   * User ID
   */
  userId: string;
}

export interface APIApikeyRevokeParams {
  /**
   * API Key ID
   */
  query_id: string;
}

export declare namespace APIApikeys {
  export {
    type APIKey as APIKey,
    type APIApikeyListResponse as APIApikeyListResponse,
    type APIApikeyRevokeResponse as APIApikeyRevokeResponse,
    type APIApikeyCreateParams as APIApikeyCreateParams,
    type APIApikeyListParams as APIApikeyListParams,
    type APIApikeyRevokeParams as APIApikeyRevokeParams,
  };
}
