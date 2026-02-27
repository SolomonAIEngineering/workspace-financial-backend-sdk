// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * **System Operations** - Health checks, API key management, financial rates, and infrastructure endpoints
 */
export class APIRates extends APIResource {
  /**
   * List all financial rates
   */
  list(options?: RequestOptions): APIPromise<APIRateListResponse> {
    return this._client.get('/v1/api.rates', options);
  }
}

export interface APIRateListResponse {
  data: Array<APIRateListResponse.Data>;
}

export namespace APIRateListResponse {
  export interface Data {
    date: string;

    rates: { [key: string]: number };

    source: string;
  }
}

export declare namespace APIRates {
  export { type APIRateListResponse as APIRateListResponse };
}
