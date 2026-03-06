# Change Log

# Change Log

## [1.0.3] - 2026-03-06
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


## [1.0.1] - 2026-03-05
### Added
- Integrated high-concurrency database snippets (Master-Slave, Batch Inserts).
- Added global compliance XML generators.
- Enhanced PHP core documentation scraper for offline hover support.

### Fixed
- Resolved build task conflicts in VS Code environments.
- Updated marketplace metadata for improved searchability.

## [1.0.0] - 2026-03-04
- Initial release of PHPOcean.
- Core PHP snippets and hover documentation.