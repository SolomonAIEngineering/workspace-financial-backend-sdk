// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as APIHealthAPI from './api-health';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * **System Operations** - Health checks, API key management, financial rates, and infrastructure endpoints
 */
export class APIHealth extends APIResource {
  /**
   * Health Check
   */
  check(query: APIHealthCheckParams, options?: RequestOptions): APIPromise<APIHealthCheckResponse> {
    return this._client.get('/v1/api.health', { query, ...options });
  }
}

export interface HealthCheck {
  healthy: boolean;

  message?: string;
}

export interface APIHealthCheckResponse {
  data: APIHealthCheckResponse.Data;
}

export namespace APIHealthCheckResponse {
  export interface Data {
    gocardless: APIHealthAPI.HealthCheck;

    plaid: APIHealthAPI.HealthCheck;

    search: Data.Search;

    teller: APIHealthAPI.HealthCheck;
  }

  export namespace Data {
    export interface Search {
      healthy: boolean;
    }
  }
}

export interface APIHealthCheckParams {
  /**
   * The ID of the API that the service belongs to
   */
  apiId: string;
}

export declare namespace APIHealth {
  export {
    type HealthCheck as HealthCheck,
    type APIHealthCheckResponse as APIHealthCheckResponse,
    type APIHealthCheckParams as APIHealthCheckParams
  };
}
