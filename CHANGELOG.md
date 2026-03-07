# Change Log

# Change Log

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
- Resolved XSS scanner false positives by enforcing strict word boundaries (preventing matches on words like `generateFingerprint`).
- Made the Session Linter context-aware: it now suppresses warnings if global secure session configurations (`session.cookie_secure`) are detected in the same file.



## [1.0.5] - 2026-03-06
### Added
- **Intelligent Quick Fixes (Lightbulb):** Added context-aware Code Actions to instantly patch vulnerabilities with enterprise-grade secure code.
  - *Fix XSS Risks:* One-click wrapping of user-controlled outputs with `htmlspecialchars()`, preserving exact indentation and trailing semicolons.

### Changed
- **Snippet Upgrades:** Upgraded the `phpcsrf` (CSRF Token Class) snippet to automatically enforce strict cookie parameters out-of-the-box.
- **Query Builder Standards:** Refactored dynamic CRUD snippets to use `sprintf()` instead of direct variable interpolation, ensuring invisible compliance with anti-SQL-injection standards.

### Fixed
- Fixed snippet syntax warnings related to unescaped PHP `$` variables in VS Code's snippet engine.


## [1.0.4] - 2026-03-06
### Added
- **Real-Time OWASP Security Linter:** PHPOcean now actively scans your code for critical security vulnerabilities as you type.
- **Intelligent Quick Fixes (Lightbulb):** Added context-aware Code Actions to instantly patch vulnerabilities with enterprise-grade secure code.
  - *Fix Cryptographic Failures:* Instantly upgrade `md5()` and `sha1()` to secure `hash('sha256')` or `password_hash()`.
  - *Fix Session Hijacking:* Automatically inject strict cookie parameters (`httponly`, `secure`, `samesite`) for bare `session_start()` calls.
  - *Fix XSS Risks:* One-click wrapping of user-controlled outputs (`echo $_GET`) with `htmlspecialchars()`.
- **SQL Injection Detection:** Real-time warnings when variables are interpolated directly into SQL command strings.

### Fixed
- Resolved snippet syntax warnings related to unescaped PHP `$` variables in VS Code's snippet engine.

## [1.0.0] - Initial Release
- Launched PHPOcean with core architectural snippets (Database Singleton, CRUD wrappers, Secure Sessions, Master-Slave architecture).
- Added sub-millisecond Hover Intelligence and Autocomplete for PHP functions.


All notable changes to the **PHPOcean** extension will be documented in this file.
## [1.0.2] - 2026-03-05

### Added
- **Frontend AJAX Fetch (`jsfetchpost`)**: Added a boilerplate vanilla JavaScript `fetch` request snippet configured for JSON payloads and robust error handling.
- **Backend AJAX Handler (`phpajax_receive`)**: Added a secure PHP receiver snippet to instantly decode incoming JSON payloads, handle missing variables, and return standardized JSON HTTP responses.

### Changed
- **Optimized Snippet Insertion**: Removed the leading `<?php` tags from all PHP snippet bodies. Snippets can now be seamlessly dropped into existing PHP files or classes without syntax errors.

### Fixed
- **Variable Escaping**: Fixed snippet variable syntax. PHP variables now correctly utilize `$$` or `\$` escaping to ensure literal dollar signs render perfectly without conflicting with VS Code's internal tab stops (`$1`, `$2`, etc.).


## [1.0.3] - 2026-03-05
### Added
- Integrated high-concurrency database snippets (Master-Slave, Batch Inserts).
- Added global compliance XML generators.
- Enhanced PHP core documentation scraper for offline hover support.

### Fixed
- Resolved build task conflicts in VS Code environments.
- Updated marketplace metadata for improved searchability.

