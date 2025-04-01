// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class APIStatements extends APIResource {
  /**
   * Get Statement PDF
   */
  retrievePdf(query: APIStatementRetrievePdfParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/v1/api.statements/pdf', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface APIStatementRetrievePdfParams {
  /**
   * Plaid access token
   */
  accessToken: string;

  /**
   * Account ID
   */
  accountId: string;

  provider: 'teller' | 'plaid' | 'gocardless' | 'stripe';

  /**
   * Statement ID
   */
  statementId: string;

  /**
   * Team ID
   */
  teamId: string;

  /**
   * User ID
   */
  userId: string;
}

export declare namespace APIStatements {
  export { type APIStatementRetrievePdfParams as APIStatementRetrievePdfParams };
}
