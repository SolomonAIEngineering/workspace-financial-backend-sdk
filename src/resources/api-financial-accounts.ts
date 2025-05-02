// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as APIInstitutionsAPI from './api-institutions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIFinancialAccounts extends APIResource {
  /**
   * List all financial accounts
   */
  list(
    query: APIFinancialAccountListParams,
    options?: RequestOptions,
  ): APIPromise<APIFinancialAccountListResponse> {
    return this._client.get('/v1/api.financial.accounts', { query, ...options });
  }

  /**
   * Delete a financial account
   */
  delete(
    id: string,
    params: APIFinancialAccountDeleteParams,
    options?: RequestOptions,
  ): APIPromise<APIFinancialAccountDeleteResponse> {
    const { accountId, provider, accessToken } = params;
    return this._client.delete(path`/v1/api.financial.accounts/${id}`, {
      query: { accountId, provider, accessToken },
      ...options,
    });
  }

  /**
   * List all account balances
   */
  listBalances(
    query: APIFinancialAccountListBalancesParams,
    options?: RequestOptions,
  ): APIPromise<APIFinancialAccountListBalancesResponse> {
    return this._client.get('/v1/api.financial.accounts/balance', { query, ...options });
  }
}

export interface APIFinancialAccountListResponse {
  data: Array<APIFinancialAccountListResponse.Data>;
}

export namespace APIFinancialAccountListResponse {
  export interface Data {
    id: string;

    balance: Data.Balance;

    currency: string;

    enrollment_id: string | null;

    institution: APIInstitutionsAPI.Institution;

    name: string;

    type: 'depository' | 'credit' | 'other_asset' | 'loan' | 'other_liability';
  }

  export namespace Data {
    export interface Balance {
      amount: number;

      currency: string;
    }
  }
}

export interface APIFinancialAccountDeleteResponse {
  success: boolean;
}

export interface APIFinancialAccountListBalancesResponse {
  data: APIFinancialAccountListBalancesResponse.Data | null;
}

export namespace APIFinancialAccountListBalancesResponse {
  export interface Data {
    amount: number;

    currency: string;
  }
}

export interface APIFinancialAccountListParams {
  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

  /**
   * GoCardLess reference id
   */
  id?: string;

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;

  /**
   * Plaid institution id
   */
  institutionId?: string;
}

export interface APIFinancialAccountDeleteParams {
  /**
   * Account id (GoCardLess)
   */
  accountId: string;

  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;
}

export interface APIFinancialAccountListBalancesParams {
  /**
   * Account id
   */
  id: string;

  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

  /**
   * Teller & Plaid access token
   */
  accessToken?: string;
}

export declare namespace APIFinancialAccounts {
  export {
    type APIFinancialAccountListResponse as APIFinancialAccountListResponse,
    type APIFinancialAccountDeleteResponse as APIFinancialAccountDeleteResponse,
    type APIFinancialAccountListBalancesResponse as APIFinancialAccountListBalancesResponse,
    type APIFinancialAccountListParams as APIFinancialAccountListParams,
    type APIFinancialAccountDeleteParams as APIFinancialAccountDeleteParams,
    type APIFinancialAccountListBalancesParams as APIFinancialAccountListBalancesParams,
  };
}
