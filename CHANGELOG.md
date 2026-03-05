# Change Log

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