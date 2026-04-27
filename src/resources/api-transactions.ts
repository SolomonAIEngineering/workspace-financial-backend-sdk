// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * **Transaction Data** - Transaction retrieval, analysis, and management including recurring transactions and statements
 */
export class APITransactions extends APIResource {
  /**
   * Get transactions for a specific account
   */
  list(query: APITransactionListParams, options?: RequestOptions): APIPromise<APITransactionListResponse> {
    return this._client.get('/v1/api.transactions', { query, ...options });
  }

  /**
   * Get recurring transactions
   */
  listRecurring(
    query: APITransactionListRecurringParams,
    options?: RequestOptions,
  ): APIPromise<APITransactionListRecurringResponse> {
    return this._client.get('/v1/api.transactions/recurring', { query, ...options });
  }
}

export interface APITransactionListResponse {
  data: Array<APITransactionListResponse.Data>;

  /**
   * Connection information (included when connectionId parameter was used)
   */
  connection?: APITransactionListResponse.Connection;

  cursor?: string | null;

  hasMore?: boolean | null;
}

export namespace APITransactionListResponse {
  export interface Data {
    id: string;

    account_id: string | null;

    amount: number;

    balance: number | null;

    bank_account_id: string;

    category: string | null;

    currency: string;

    currency_rate: number | null;

    currency_source: string | null;

    date: string;

    description: string | null;

    internal_id: string;

    method: string | null;

    name: string;

    status: 'pending' | 'posted';

    account_owner?: string | null;

    assigned_id?: string | null;

    authorized_date?: string | null;

    authorized_datetime?: string | null;

    category_id?: string | null;

    category_slug?: string | null;

    check_number?: string | null;

    iso_currency_code?: string | null;

    location_address?: string | null;

    location_city?: string | null;

    location_country?: string | null;

    location_lat?: number | null;

    location_lon?: number | null;

    location_postal_code?: string | null;

    location_region?: string | null;

    location_store_number?: string | null;

    logo_url?: string | null;

    manual?: boolean | null;

    merchant_entity_id?: string | null;

    merchant_name?: string | null;

    payment_channel?: string | null;

    payment_meta_by_order_of?: string | null;

    payment_meta_payee?: string | null;

    payment_meta_payer?: string | null;

    payment_meta_payment_method?: string | null;

    payment_meta_payment_processor?: string | null;

    payment_meta_ppd_id?: string | null;

    payment_meta_reason?: string | null;

    payment_meta_reference_number?: string | null;

    pending?: boolean | null;

    pending_transaction_id?: string | null;

    personal_finance_category_confidence_level?: string | null;

    personal_finance_category_detailed?: string | null;

    personal_finance_category_icon_url?: string | null;

    personal_finance_category_primary?: string | null;

    transaction_code?: string | null;

    transaction_id?: string | null;

    transaction_type?: string | null;

    unofficial_currency_code?: string | null;

    website?: string | null;
  }

  /**
   * Connection information (included when connectionId parameter was used)
   */
  export interface Connection {
    /**
     * Connection ID
     */
    id: string;

    /**
     * Connection creation timestamp
     */
    createdAt: string;

    /**
     * Institution ID (provider-specific)
     */
    institutionId: string | null;

    /**
     * Institution name
     */
    institutionName: string | null;

    /**
     * Last successful sync timestamp
     */
    lastSyncAt: string | null;

    /**
     * Financial data provider
     */
    provider: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

    /**
     * Connection status
     */
    status: string;
  }
}

export interface APITransactionListRecurringResponse {
  inflow: Array<APITransactionListRecurringResponse.Inflow>;

  last_updated_at: string;

  outflow: Array<APITransactionListRecurringResponse.Outflow>;
}

export namespace APITransactionListRecurringResponse {
  export interface Inflow {
    account_id: string;

    average_amount: Inflow.AverageAmount;

    category: Array<string>;

    category_id: string;

    description: string;

    first_date: string;

    frequency: 'weekly' | 'bi-weekly' | 'monthly' | 'yearly' | 'semi-monthly' | 'unknown';

    is_active: boolean;

    is_user_modified: boolean;

    last_amount: Inflow.LastAmount;

    last_date: string;

    last_user_modified_datetime: string | null;

    merchant_name: string | null;

    personal_finance_category: Inflow.PersonalFinanceCategory | null;

    status: 'mature' | 'early_detection' | 'tombstoned' | 'unknown';

    stream_id: string;

    transaction_ids: Array<string>;
  }

  export namespace Inflow {
    export interface AverageAmount {
      amount: number;

      iso_currency_code: string | null;

      unofficial_currency_code: string | null;
    }

    export interface LastAmount {
      amount: number;

      iso_currency_code: string | null;

      unofficial_currency_code: string | null;
    }

    export interface PersonalFinanceCategory {
      confidence_level: string;

      detailed: string;

      primary: string;
    }
  }

  export interface Outflow {
    account_id: string;

    average_amount: Outflow.AverageAmount;

    category: Array<string>;

    category_id: string;

    description: string;

    first_date: string;

    frequency: 'weekly' | 'bi-weekly' | 'monthly' | 'yearly' | 'semi-monthly' | 'unknown';

    is_active: boolean;

    is_user_modified: boolean;

    last_amount: Outflow.LastAmount;

    last_date: string;

    last_user_modified_datetime: string | null;

    merchant_name: string | null;

    personal_finance_category: Outflow.PersonalFinanceCategory | null;

    status: 'mature' | 'early_detection' | 'tombstoned' | 'unknown';

    stream_id: string;

    transaction_ids: Array<string>;
  }

  export namespace Outflow {
    export interface AverageAmount {
      amount: number;

      iso_currency_code: string | null;

      unofficial_currency_code: string | null;
    }

    export interface LastAmount {
      amount: number;

      iso_currency_code: string | null;

      unofficial_currency_code: string | null;
    }

    export interface PersonalFinanceCategory {
      confidence_level: string;

      detailed: string;

      primary: string;
    }
  }
}

export interface APITransactionListParams {
  /**
   * Get transactions by accountId (Stripe account holder reference for Stripe)
   */
  accountId: string;

  /**
   * The ID of the API that the service belongs to
   */
  apiId: string;

  /**
   * Used for Teller and Plaid
   */
  accessToken?: string;

  /**
   * Get transactions with the correct amount depending on credit or depository
   */
  accountType?: 'credit' | 'depository' | 'other_asset' | 'loan' | 'other_liability';

  /**
   * Connection ID to automatically derive provider context and credentials
   */
  connectionId?: string;

  /**
   * Get latest transactions
   */
  latest?: 'true' | 'false';

  provider?: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

  syncCursor?: string | null;
}

export interface APITransactionListRecurringParams {
  /**
   * Access token for Plaid
   */
  accessToken: string;

  /**
   * Account ID for Plaid
   */
  accountId: string;

  /**
   * The ID of the API that the service belongs to
   */
  apiId: string;

  provider: 'plaid';

  /**
   * Team ID
   */
  teamId: string;

  /**
   * User ID
   */
  userId: string;
}

export declare namespace APITransactions {
  export {
    type APITransactionListResponse as APITransactionListResponse,
    type APITransactionListRecurringResponse as APITransactionListRecurringResponse,
    type APITransactionListParams as APITransactionListParams,
    type APITransactionListRecurringParams as APITransactionListRecurringParams,
  };
}
