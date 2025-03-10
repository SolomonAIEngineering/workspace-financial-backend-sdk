// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIUsers extends APIResource {
  /**
   * Create User
   */
  create(body: APIUserCreateParams, options?: RequestOptions): APIPromise<APIUserCreateResponse> {
    return this._client.post('/v1/api.users', { body, ...options });
  }

  /**
   * Get User
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIUserRetrieveResponse> {
    return this._client.get(path`/v1/api.users/${id}`, options);
  }

  /**
   * Update User
   */
  update(
    id: string,
    body: APIUserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIUserUpdateResponse> {
    return this._client.put(path`/v1/api.users/${id}`, { body, ...options });
  }

  /**
   * Delete User
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIUserDeleteResponse> {
    return this._client.delete(path`/v1/api.users/${id}`, options);
  }
}

export interface APIUserCreateResponse {
  id: number;

  createdAt: string;

  email: string;

  name: string | null;

  updatedAt: string;
}

export interface APIUserRetrieveResponse {
  id: string;

  createdAt: string | null;

  email: string;

  name: string | null;

  updatedAt: string | null;
}

export interface APIUserUpdateResponse {
  id?: number;

  createdAt?: string;

  email?: string;

  name?: string | null;

  updatedAt?: string;
}

export interface APIUserDeleteResponse {
  success: boolean;
}

export interface APIUserCreateParams {
  email: string;

  name: string | null;
}

export interface APIUserUpdateParams {
  email?: string;

  name?: string | null;
}

export declare namespace APIUsers {
  export {
    type APIUserCreateResponse as APIUserCreateResponse,
    type APIUserRetrieveResponse as APIUserRetrieveResponse,
    type APIUserUpdateResponse as APIUserUpdateResponse,
    type APIUserDeleteResponse as APIUserDeleteResponse,
    type APIUserCreateParams as APIUserCreateParams,
    type APIUserUpdateParams as APIUserUpdateParams,
  };
}
