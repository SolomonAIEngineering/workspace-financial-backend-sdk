// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * **Financial Institutions** - Directory and management of supported banking providers and financial institutions
 */
export class APIInstitutions extends APIResource {
  /**
   * List all financial institutions
   */
  list(query: APIInstitutionListParams, options?: RequestOptions): APIPromise<APIInstitutionListResponse> {
    return this._client.get('/v1/api.institutions', { query, ...options });
  }

  /**
   * Update the usage of a financial institution
   */
  updateUsage(id: string, params: APIInstitutionUpdateUsageParams, options?: RequestOptions): APIPromise<APIInstitutionUpdateUsageResponse> {
    const { apiId, cached, connectionId, costUsd, enrichmentType, modelUsed, provider, responseTimeMs, transactionCount, usageType } = params
    return this._client.put(path`/v1/api.institutions/${id}/usage`, { query: { apiId, cached, connectionId, costUsd, enrichmentType, modelUsed, provider, responseTimeMs, transactionCount, usageType }, ...options });
  }
}

export interface Institution {
  id: string;

  logo: string | null;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe' | 'enablebanking';

  available_history?: number | null;
}

export interface APIInstitutionListResponse {
  data: Array<Institution>;

  /**
   * Connection information (included when connectionId parameter was used)
   */
  connection?: APIInstitutionListResponse.Connection;
}

export namespace APIInstitutionListResponse {
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

export interface APIInstitutionUpdateUsageResponse {
  data: Institution;
}

export interface APIInstitutionListParams {
  /**
   * The ID of the API that the service belongs to
   */
  apiId: string;

  /**
   * Country code
   */
  countryCode: 'AT' | 'BE' | 'BG' | 'HR' | 'CY' | 'CZ' | 'DK' | 'EE' | 'FI' | 'FR' | 'DE' | 'GR' | 'HU' | 'IS' | 'IE' | 'IT' | 'LV' | 'LI' | 'LT' | 'LU' | 'MT' | 'NL' | 'NO' | 'PL' | 'PT' | 'RO' | 'SK' | 'SI' | 'ES' | 'SE' | 'GB' | 'US';

  /**
   * Connection ID to filter institutions by provider (optional)
   */
  connectionId?: string;

  /**
   * Limit results
   */
  limit?: string;

  /**
   * Search query
   */
  q?: string;
}

export interface APIInstitutionUpdateUsageParams {
  /**
   * The ID of the API that the service belongs to
   */
  apiId: string;

  /**
   * Whether the operation used cached data
   */
  cached?: boolean | null;

  /**
   * The connection ID associated with this usage
   */
  connectionId?: string;

  /**
   * Cost of the operation in USD
   */
  costUsd?: number | null;

  /**
   * Type of enrichment performed
   */
  enrichmentType?: string;

  /**
   * AI model used for enrichment
   */
  modelUsed?: string;

  /**
   * The provider used
   */
  provider?: 'plaid' | 'gocardless' | 'enablebanking' | 'teller' | 'stripe';

  /**
   * Response time in milliseconds
   */
  responseTimeMs?: number | null;

  /**
   * Number of transactions processed
   */
  transactionCount?: number | null;

  /**
   * The type of usage being tracked
   */
  usageType?: 'connection_created' | 'connection_deleted' | 'transaction_fetch' | 'account_fetch' | 'statement_access' | 'balance_check' | 'auth_refresh' | 'transaction_enrichment' | 'category_prediction' | 'tax_analysis' | 'business_purpose' | 'receipt_requirement' | 'per_diem_analysis' | 'worker_classification' | 'multi_model_enrichment';
}

export declare namespace APIInstitutions {
  export {
    type Institution as Institution,
    type APIInstitutionListResponse as APIInstitutionListResponse,
    type APIInstitutionUpdateUsageResponse as APIInstitutionUpdateUsageResponse,
    type APIInstitutionListParams as APIInstitutionListParams,
    type APIInstitutionUpdateUsageParams as APIInstitutionUpdateUsageParams
  };
}
