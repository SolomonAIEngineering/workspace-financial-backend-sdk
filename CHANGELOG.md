# Changelog

## 0.1.0-alpha.3 (2025-05-01)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** api update ([fea1cfa](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/fea1cfa38652b6bf5eaaa01cb1df47825939758d))


### Bug Fixes

* **internal:** fix file uploads in node 18 jest ([97d21bd](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/97d21bd27690c8c24e1b6f12bdf1df682fbb496d))


### Chores

* **ci:** add timeout thresholds for CI jobs ([6d678e3](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/6d678e3174c248a806b5351cf20c7edc6105abd2))
* **ci:** only use depot for staging repos ([f71634c](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/f71634c46f23d473c4a78254d6e9ba86e7f9b820))
* **client:** minor internal fixes ([7aba983](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/7aba9833e849d681bfee1f66f9f1b97592c4c18e))
* **internal:** codegen related update ([d461b5e](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/d461b5ecd0879759b46f89683d18bfbcab6d3d7c))
* **internal:** refactor utils ([25f02bd](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/25f02bd9c356bdd9fd5fbc2a8725a81e4f0a7a95))
* **perf:** faster base64 decoding ([4f46883](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/4f468830ad8a12f439d827b2a427fd643281d590))


### Documentation

* **readme:** fix typo ([b134dc2](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/b134dc27ca3c736221dc2f71ff46f1edc78785cd))

## 0.1.0-alpha.2 (2025-04-10)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#21](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/21)) ([eb6def4](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/eb6def49b37177291071de8c85cc3550096f4672))
* **client:** send `X-Stainless-Timeout` in seconds ([#19](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/19)) ([e32d69a](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/e32d69ab1056437671466c0d19c583287220fa7d))
* **client:** send all configured auth headers ([#23](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/23)) ([cd13acc](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/cd13acc20481c4b04f9de3302b483687958e111f))
* **mcp:** remove unused tools.ts ([#22](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/22)) ([0bbc02c](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/0bbc02c8588d96a4ca5d119cbb8815055f7fc122))
* pluralize `list` response variables ([#17](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/17)) ([b8bebee](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/b8bebeed32f2c7ef983e4f7834793ef63780230d))


### Chores

* **internal:** add aliases for Record and Array ([#20](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/20)) ([399cb7a](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/399cb7aa5f7cbd4023c9914008de8cc1f658994b))
* **internal:** improve node 18 shims ([3a222e1](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/3a222e108299c87a83e8fb80c5633058f67e91eb))
* **internal:** reduce CI branch coverage ([69c9c77](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/69c9c77d120a23bd5d121018b8dcf49397f26060))
* **internal:** upload builds and expand CI branch coverage ([36ac9b8](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/36ac9b82dc87959711862fea7f68521ae318b394))
* **tests:** improve enum examples ([#24](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/24)) ([a0a3959](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/a0a39591000b49aec749d84cb9148371f372f001))

## 0.1.0-alpha.1 (2025-03-27)

Full Changelog: [v0.0.1-alpha.2...v0.1.0-alpha.1](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/compare/v0.0.1-alpha.2...v0.1.0-alpha.1)

### Features

* **client:** accept RFC6838 JSON content types ([#8](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/8)) ([7c5cb6d](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/7c5cb6da47eaf315c69060331a13e28eb532eb82))


### Bug Fixes

* **internal:** add mts file + crypto shim types ([#11](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/11)) ([d2cab5c](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/d2cab5c152fe30bb72633dbc20c6c97bf204ea38))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#15](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/15)) ([517f875](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/517f87547e30a4cdb3745f1c52b1acda993a85c5))
* **exports:** cleaner resource index imports ([#13](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/13)) ([dd10a81](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/dd10a810821580f27d38e93359470a3f2e2a66f2))
* **exports:** stop using path fallbacks ([#14](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/14)) ([68c0b0e](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/68c0b0ec4f13de7d36edb17cfd13d4c1e37fc501))
* **internal:** minor client file refactoring ([#12](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/12)) ([145b22a](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/145b22a68e00a3e0585bc080fbe792cea2e34022))
* **internal:** remove extra empty newlines ([#10](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/10)) ([d49fc8f](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/d49fc8fb791175da729bbeb4874a5d2193942a27))

## 0.0.1-alpha.2 (2025-03-10)

Full Changelog: [v0.0.1-alpha.1...v0.0.1-alpha.2](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)

### Chores

* update SDK settings ([#5](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/5)) ([1918b8f](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/1918b8f33ac732551e03d3a0dadc8aaaa32de01b))

## 0.0.1-alpha.1 (2025-03-10)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* go live ([#1](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/1)) ([dcf3dd8](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/dcf3dd87dcbeb15fc20803a2b81b177dde3b166b))
* update SDK settings ([#3](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/issues/3)) ([077dee8](https://github.com/SolomonAIEngineering/workspace-financial-backend-sdk/commit/077dee8a6a479c192dca5ff51d3590b94cdc7908))
