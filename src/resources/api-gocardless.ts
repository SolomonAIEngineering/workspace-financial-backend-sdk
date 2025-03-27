// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIGocardless extends APIResource {
  /**
   * Agreement (GoCardLess)
   */
  createAgreement(
    body: APIGocardlessCreateAgreementParams,
    options?: RequestOptions,
  ): APIPromise<APIGocardlessCreateAgreementResponse> {
    return this._client.post('/v1/api.gocardless/agreement', { body, ...options });
  }

  /**
   * Auth link (GoCardLess)
   */
  createLink(
    body: APIGocardlessCreateLinkParams,
    options?: RequestOptions,
  ): APIPromise<APIGocardlessCreateLinkResponse> {
    return this._client.post('/v1/api.gocardless/link', { body, ...options });
  }

  /**
   * Exchange token (GoCardLess)
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
  institutionId: string;

  transactionTotalDays: number;
}

export interface APIGocardlessCreateLinkParams {
  agreement: string | null;

  institutionId: string;

  redirect: string;
}

export interface APIGocardlessExchangeTokenParams {
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
