# Change Log
All notable changes to the 🌊 **PHPOcean** extension will be documented in this file.

## [1.1.0] - 2026-03-09
### Added
**Massive Zero-Trust Security & Enterprise API Update**
- **Application-Level PII Encryption (`phpencrypt_pii`):** AES-256-GCM authenticated encryption for securing highly sensitive database columns.
- **SSRF Defender (`phpssrf_block`):** Strict URL fetcher that resolves hostnames and explicitly blocks internal/private IP ranges.
- **LFI / Path Traversal Blocker (`phpdownload_secure`):** Secure file downloader using `realpath()` to lock access to specific directories.
- **CSP Generator (`phpcsp_header`):** Dynamic Content-Security-Policy header generator with cryptographic nonces to defeat XSS.
- **JWT Handler (`phpjwt`):** Zero-dependency JSON Web Token encoder/decoder with HS256 signature and expiration validation.
- **API Rate Limiter (`phpratelimit`):** Thread-safe, high-concurrency Redis rate limiter to block brute-force attacks.
- **Secure Webhook Receiver (`phpwebhook_hmac`):** HMAC signature verification to prevent timing attacks on external API payloads.
- **ETL Batch Processor (`phpetl_batch`):** Memory-safe data migration utilizing PHP Generators (`yield`) for millions of rows.
- **Secure .htaccess (`phphtaccess_secure`):** Blueprint for forcing HTTPS, front-controller routing, and blocking sensitive files.
- **Cryptographic UUIDv4 (`phpuuid` & `phpuuid_validate`):** RFC 4122 compliant ID generator and strict Regex validator.

## [1.0.8] - 2026-03-07
### Added
- **Secure API Endpoint (`phpapi_secure`):** Production-ready API boilerplate with Bearer token validation, Nginx header fallbacks, and JSON decoding.

## [1.0.7] - 2026-03-07
### Fixed
- **SQL Scanner Precision:** Resolved a critical multi-line regex bleed in the SQL Injection linter.
- **Build Pipeline:** Fixed the TypeScript compiler routing (`outDir`).

## [1.0.6] - 2026-03-07
### Added
- **Real-Time OWASP Security Linter & Quick Fixes:** Active AST-free scanning for XSS, SQLi, Session Hijacking, and Cryptographic failures.
- **New Snippet:** `phpdatabase_wrapper` (Ultimate Database Manager).

### Changed
- **Query Builder Standards:** Refactored dynamic CRUD snippets to use `sprintf()`.

## [1.0.5] - 2026-03-06
### Added
- **Intelligent Quick Fixes (Lightbulb):** Context-aware Code Actions to instantly patch vulnerabilities.

## [1.0.4] - 2026-03-06
### Added
- **SQL Injection Detection:** Real-time warnings for unsafe variable interpolation.

## [1.0.3] - 2026-03-05
### Added
- Integrated high-concurrency database snippets and global compliance XML generators.

## [1.0.2] - 2026-03-05
### Added
- **Frontend AJAX Fetch (`jsfetchpost`)** and **Backend AJAX Handler (`phpajax_receive`)**.

## [1.0.0] - Initial Release
- Launched PHPOcean with core architectural snippets and sub-millisecond Hover Intelligence.