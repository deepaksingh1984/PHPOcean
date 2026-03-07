# Change Log
All notable changes to the **PHPOcean** extension will be documented in this file.

## [1.0.8] - 2026-03-07
### Added
- **Secure API Endpoint (`phpapi_secure`):** Added a production-ready API boilerplate snippet. It features strict HTTP method checking, cross-server (Apache/Nginx) authorization header extraction, timing-attack resistant token validation using `hash_equals()`, and automated JSON payload decoding.

## [1.0.7] - 2026-03-07
### Fixed
- **SQL Scanner Precision:** Resolved a critical multi-line regex bleed that caused the SQL Injection linter to falsely flag standard PHP method signatures (like `public function insert()`). The scanner is now strictly single-line bound.
- **Build Pipeline:** Fixed the TypeScript compiler routing (`outDir` in `tsconfig.json`) to ensure all advanced Code Actions and linter rules load instantly and correctly upon startup.

## [1.0.6] - 2026-03-07
### Added
- **Real-Time OWASP Security Linter:** PHPOcean now actively scans your code for critical security vulnerabilities as you type.
  - *Fix Cryptographic Failures:* Instantly upgrade `md5()` and `sha1()` to secure `hash('sha256')` or `password_hash()`.
  - *Fix Session Hijacking:* Automatically inject strict cookie parameters (`httponly`, `secure`, `samesite`) for bare `session_start()` calls.
- **New Snippet:** Added `phpdatabase_wrapper` (Ultimate Database Manager), combining the secure PDO Singleton architecture with advanced dynamic CRUD operations in a single class.

### Changed
- **Snippet Upgrades:** Upgraded the `phpcsrf` (CSRF Token Class) snippet to automatically enforce strict cookie parameters out-of-the-box.
- **Query Builder Standards:** Refactored dynamic CRUD snippets to use `sprintf()` instead of direct variable interpolation, ensuring invisible compliance with anti-SQL-injection standards.

### Fixed
- Resolved XSS scanner false positives by enforcing strict word boundaries.
- Made the Session Linter context-aware: it now suppresses warnings if global secure session configurations (`session.cookie_secure`) are detected in the same file.

## [1.0.5] - 2026-03-06
### Added
- **Intelligent Quick Fixes (Lightbulb):** Added context-aware Code Actions to instantly patch vulnerabilities with enterprise-grade secure code.
  - *Fix XSS Risks:* One-click wrapping of user-controlled outputs with `htmlspecialchars()`, preserving exact indentation and trailing semicolons.

### Fixed
- Fixed snippet syntax warnings related to unescaped PHP `$` variables in VS Code's snippet engine.

## [1.0.4] - 2026-03-06
### Added
- **SQL Injection Detection:** Real-time warnings when variables are interpolated directly into SQL command strings.

## [1.0.3] - 2026-03-05
### Added
- Integrated high-concurrency database snippets (Master-Slave, Batch Inserts).
- Added global compliance XML generators.

## [1.0.2] - 2026-03-05
### Added
- **Frontend AJAX Fetch (`jsfetchpost`)** and **Backend AJAX Handler (`phpajax_receive`)**.

### Changed
- **Optimized Snippet Insertion**: Removed the leading `<?php` tags from all PHP snippet bodies.

## [1.0.0] - Initial Release
- Launched PHPOcean with core architectural snippets and sub-millisecond Hover Intelligence.