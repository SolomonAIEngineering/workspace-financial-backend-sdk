# APIFinancialAccounts

Types:

- <code><a href="./src/resources/api-financial-accounts.ts">APIFinancialAccountListResponse</a></code>
- <code><a href="./src/resources/api-financial-accounts.ts">APIFinancialAccountDeleteResponse</a></code>
- <code><a href="./src/resources/api-financial-accounts.ts">APIFinancialAccountListBalancesResponse</a></code>

Methods:

- <code title="get /v1/api.financial.accounts">client.apiFinancialAccounts.<a href="./src/resources/api-financial-accounts.ts">list</a>({ ...params }) -> APIFinancialAccountListResponse</code>
- <code title="delete /v1/api.financial.accounts/{id}">client.apiFinancialAccounts.<a href="./src/resources/api-financial-accounts.ts">delete</a>(id, { ...params }) -> APIFinancialAccountDeleteResponse</code>
- <code title="get /v1/api.financial.accounts/balance">client.apiFinancialAccounts.<a href="./src/resources/api-financial-accounts.ts">listBalances</a>({ ...params }) -> APIFinancialAccountListBalancesResponse</code>

# APIHealth

Types:

- <code><a href="./src/resources/api-health.ts">HealthCheck</a></code>
- <code><a href="./src/resources/api-health.ts">APIHealthCheckResponse</a></code>

Methods:

- <code title="get /v1/api.health">client.apiHealth.<a href="./src/resources/api-health.ts">check</a>() -> APIHealthCheckResponse</code>

# APIApikeys

Types:

- <code><a href="./src/resources/api-apikeys.ts">APIKey</a></code>
- <code><a href="./src/resources/api-apikeys.ts">APIApikeyListResponse</a></code>
- <code><a href="./src/resources/api-apikeys.ts">APIApikeyRevokeResponse</a></code>

Methods:

- <code title="post /v1/api.apikeys">client.apiApikeys.<a href="./src/resources/api-apikeys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /v1/api.apikeys">client.apiApikeys.<a href="./src/resources/api-apikeys.ts">list</a>({ ...params }) -> APIApikeyListResponse</code>
- <code title="delete /v1/api.apikeys/{id}">client.apiApikeys.<a href="./src/resources/api-apikeys.ts">revoke</a>(pathID, { ...params }) -> APIApikeyRevokeResponse</code>

# APIGocardless

Types:

- <code><a href="./src/resources/api-gocardless.ts">APIGocardlessCreateAgreementResponse</a></code>
- <code><a href="./src/resources/api-gocardless.ts">APIGocardlessCreateLinkResponse</a></code>
- <code><a href="./src/resources/api-gocardless.ts">APIGocardlessExchangeTokenResponse</a></code>

Methods:

- <code title="post /v1/api.gocardless/agreement">client.apiGocardless.<a href="./src/resources/api-gocardless.ts">createAgreement</a>({ ...params }) -> APIGocardlessCreateAgreementResponse</code>
- <code title="post /v1/api.gocardless/link">client.apiGocardless.<a href="./src/resources/api-gocardless.ts">createLink</a>({ ...params }) -> APIGocardlessCreateLinkResponse</code>
- <code title="post /v1/api.gocardless/exchange">client.apiGocardless.<a href="./src/resources/api-gocardless.ts">exchangeToken</a>({ ...params }) -> APIGocardlessExchangeTokenResponse</code>

# APIPlaid

Types:

- <code><a href="./src/resources/api-plaid.ts">APIPlaidCreateLinkResponse</a></code>
- <code><a href="./src/resources/api-plaid.ts">APIPlaidExchangeTokenResponse</a></code>

Methods:

- <code title="post /v1/api.plaid/link">client.apiPlaid.<a href="./src/resources/api-plaid.ts">createLink</a>({ ...params }) -> APIPlaidCreateLinkResponse</code>
- <code title="post /v1/api.plaid/exchange">client.apiPlaid.<a href="./src/resources/api-plaid.ts">exchangeToken</a>({ ...params }) -> APIPlaidExchangeTokenResponse</code>

# APIInstitutions

Types:

- <code><a href="./src/resources/api-institutions.ts">Institution</a></code>
- <code><a href="./src/resources/api-institutions.ts">APIInstitutionListResponse</a></code>
- <code><a href="./src/resources/api-institutions.ts">APIInstitutionUpdateUsageResponse</a></code>

Methods:

- <code title="get /v1/api.institutions">client.apiInstitutions.<a href="./src/resources/api-institutions.ts">list</a>({ ...params }) -> APIInstitutionListResponse</code>
- <code title="put /v1/api.institutions/{id}/usage">client.apiInstitutions.<a href="./src/resources/api-institutions.ts">updateUsage</a>(id) -> APIInstitutionUpdateUsageResponse</code>

# APIRates

Types:

- <code><a href="./src/resources/api-rates.ts">APIRateListResponse</a></code>

Methods:

- <code title="get /v1/api.rates">client.apiRates.<a href="./src/resources/api-rates.ts">list</a>() -> APIRateListResponse</code>

# APIStatements

Methods:

- <code title="get /v1/api.statements/pdf">client.apiStatements.<a href="./src/resources/api-statements.ts">retrievePdf</a>({ ...params }) -> Response</code>

# APITransactions

Types:

- <code><a href="./src/resources/api-transactions.ts">APITransactionListResponse</a></code>
- <code><a href="./src/resources/api-transactions.ts">APITransactionListRecurringResponse</a></code>

Methods:

- <code title="get /v1/api.transactions">client.apiTransactions.<a href="./src/resources/api-transactions.ts">list</a>({ ...params }) -> APITransactionListResponse</code>
- <code title="get /v1/api.transactions/recurring">client.apiTransactions.<a href="./src/resources/api-transactions.ts">listRecurring</a>({ ...params }) -> APITransactionListRecurringResponse</code>

# APIUsers

Types:

- <code><a href="./src/resources/api-users.ts">APIUserCreateResponse</a></code>
- <code><a href="./src/resources/api-users.ts">APIUserRetrieveResponse</a></code>
- <code><a href="./src/resources/api-users.ts">APIUserUpdateResponse</a></code>
- <code><a href="./src/resources/api-users.ts">APIUserDeleteResponse</a></code>

Methods:

- <code title="post /v1/api.users">client.apiUsers.<a href="./src/resources/api-users.ts">create</a>({ ...params }) -> APIUserCreateResponse</code>
- <code title="get /v1/api.users/{id}">client.apiUsers.<a href="./src/resources/api-users.ts">retrieve</a>(id) -> APIUserRetrieveResponse</code>
- <code title="put /v1/api.users/{id}">client.apiUsers.<a href="./src/resources/api-users.ts">update</a>(id, { ...params }) -> APIUserUpdateResponse</code>
- <code title="delete /v1/api.users/{id}">client.apiUsers.<a href="./src/resources/api-users.ts">delete</a>(id) -> APIUserDeleteResponse</code>
