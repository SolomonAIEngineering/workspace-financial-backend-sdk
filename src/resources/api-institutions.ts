// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
  updateUsage(id: string, options?: RequestOptions): APIPromise<APIInstitutionUpdateUsageResponse> {
    return this._client.put(path`/v1/api.institutions/${id}/usage`, options);
  }
}

export interface Institution {
  id: string;

  logo: string | null;

  name: string;

  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe';

  available_history?: number | null;
}

export interface APIInstitutionListResponse {
  data: Array<Institution>;
}

export interface APIInstitutionUpdateUsageResponse {
  data: Institution;
}

export interface APIInstitutionListParams {
  /**
   * Country code
   */
  countryCode:
    | 'AT'
    | 'BE'
    | 'BG'
    | 'HR'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'EE'
    | 'FI'
    | 'FR'
    | 'DE'
    | 'GR'
    | 'HU'
    | 'IS'
    | 'IE'
    | 'IT'
    | 'LV'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MT'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'SK'
    | 'SI'
    | 'ES'
    | 'SE'
    | 'GB'
    | 'US';

  /**
   * Limit results
   */
  limit?: string;

  /**
   * Search query
   */
  q?: string;
}

export declare namespace APIInstitutions {
  export {
    type Institution as Institution,
    type APIInstitutionListResponse as APIInstitutionListResponse,
    type APIInstitutionUpdateUsageResponse as APIInstitutionUpdateUsageResponse,
    type APIInstitutionListParams as APIInstitutionListParams,
  };
}
