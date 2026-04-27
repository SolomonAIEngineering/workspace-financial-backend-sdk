// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * **Authentication & Authorization** - Secure API access management, token exchange, and provider connections for all banking providers
 */
export class APIGocardless extends APIResource {
  /**
   * Agreement (GoCardLess)
   *
   * @example
   * ```ts
   * const response = await client.apiGocardless.createAgreement(
   *   {
   *     apiId: 'apiId',
   *     institutionId: 'REVOLUT_REVOGB21',
   *     transactionTotalDays: 90,
   *   },
   * );
   * ```
   */
  createAgreement(
    body: APIGocardlessCreateAgreementParams,
    options?: RequestOptions,
  ): APIPromise<APIGocardlessCreateAgreementResponse> {
    return this._client.post('/v1/api.gocardless/agreement', { body, ...options });
  }

  /**
   * Auth link (GoCardLess)
   *
   * @example
   * ```ts
   * const response = await client.apiGocardless.createLink({
   *   agreement: '2dea1b84-97b0-4cb4-8805-302c227587c8',
   *   apiId: 'apiId',
   *   institutionId: 'REVOLUT_REVOGB21',
   *   redirect: 'http://www.yourwebpage.com',
   * });
   * ```
   */
  createLink(
    body: APIGocardlessCreateLinkParams,
    options?: RequestOptions,
  ): APIPromise<APIGocardlessCreateLinkResponse> {
    return this._client.post('/v1/api.gocardless/link', { body, ...options });
  }

  /**
   * Exchange token (GoCardLess)
   *
   * @example
   * ```ts
   * const response = await client.apiGocardless.exchangeToken({
   *   apiId: 'apiId',
   *   institutionId: 'REVOLUT_REVOGB21',
   *   transactionTotalDays: 90,
   * });
   * ```
   */
  exchangeToken(
    body: APIGocardlessExchangeTokenParams,
    options?: RequestOptions,
  ): APIPromise<APIGocardlessExchangeTokenResponse> {
    return this._client.post('/v1/api.gocardless/exchange', { body, ...options });
  }
}

export interface APIGocardlessCreateAgreementResponse {
  data: APIGocardlessCreateAgreementResponse.Data;
}

export namespace APIGocardlessCreateAgreementResponse {
  export interface Data {
    id: string;

    accepted: boolean;

    access_valid_for_days: number;

    created: string;

    institution_id: string;

    max_historical_days: number;
  }
}

export interface APIGocardlessCreateLinkResponse {
  data: APIGocardlessCreateLinkResponse.Data;
}

export namespace APIGocardlessCreateLinkResponse {
  export interface Data {
    link: string;
  }
}

export interface APIGocardlessExchangeTokenResponse {
  data: APIGocardlessExchangeTokenResponse.Data;
}

export namespace APIGocardlessExchangeTokenResponse {
  export interface Data {
    id: string;

    access_valid_for_days: number;

    institution_id: string;

    max_historical_days: number;
  }
}

export interface APIGocardlessCreateAgreementParams {
  apiId: string;

  institutionId: string;

  transactionTotalDays: number;
}

export interface APIGocardlessCreateLinkParams {
  agreement: string | null;

  apiId: string;

  institutionId: string;

  redirect: string;
}

export interface APIGocardlessExchangeTokenParams {
  apiId: string;

  institutionId: string;

  transactionTotalDays: number;
}

export declare namespace APIGocardless {
  export {
    type APIGocardlessCreateAgreementResponse as APIGocardlessCreateAgreementResponse,
    type APIGocardlessCreateLinkResponse as APIGocardlessCreateLinkResponse,
    type APIGocardlessExchangeTokenResponse as APIGocardlessExchangeTokenResponse,
    type APIGocardlessCreateAgreementParams as APIGocardlessCreateAgreementParams,
    type APIGocardlessCreateLinkParams as APIGocardlessCreateLinkParams,
    type APIGocardlessExchangeTokenParams as APIGocardlessExchangeTokenParams,
  };
}
