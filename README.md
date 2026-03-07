# PHPOcean 🌊
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/deepakbsingh)

PHPOcean is an enterprise-grade PHP code intelligence and security extension for Visual Studio Code. Built specifically for developers handling high-concurrency databases, strict zero-trust security environments, and specialized API architectures, it helps you ship compliant, high-performance applications faster.

## 🛡️ Real-Time OWASP Security Linter & Quick Fixes
PHPOcean acts as a live security auditor, scanning your code as you type to prevent critical vulnerabilities before they reach production—with zero AST parsing overhead.

**Detects & Flags:**
* **SQL Injection (SQLi):** Flags unsafe variable interpolation inside database queries, utilizing a smart whitelist for structural variables (like `$table`).
* **Cross-Site Scripting (XSS):** Warns when superglobals (`$_GET`, `$_POST`) are output directly to the browser.
* **Session Hijacking:** Detects insecure `session_start()` configurations while intelligently respecting global strict cookie setups.
* **Cryptographic Failures:** Warns against outdated hashing algorithms like `md5()` and `sha1()`.

💡 **Intelligent Quick Fixes:** Spot a vulnerability? Click the VS Code Lightbulb (`Ctrl + .`) to instantly rewrite the code using secure, modern PHP standards (e.g., auto-wrapping outputs in `htmlspecialchars()`, or upgrading hashes to `password_hash()`).

## 🧠 Dynamic PHP Code Intelligence
Forget switching tabs to check the official documentation. PHPOcean includes a locally parsed, sub-millisecond knowledge base powered by official PHP Stubs.
* **Intelligent Hover Tooltips:** Instantly view function descriptions, parameter types, and return values.
* **Smart Autocomplete:** Native VS Code completion for standard PHP functions, PDO, MySQLi, and cURL, automatically dropping your cursor inside the required parameters.
* **Direct Documentation Links:** Click directly through to the official `php.net` manual from the hover tooltip.

![Database Class Demo](https://res.cloudinary.com/techmeshblog/image/upload/v1772708596/database_qkrq0q.gif)

## 🚀 High-Performance Snippet Library
Stop rewriting the same configurations. Type a prefix and hit `Tab` to drop production-ready, highly secure architecture directly into your workspace.

![Snippet Demo Session Security](https://res.cloudinary.com/techmeshblog/image/upload/v1772710172/session_daegmf.gif)

#### 🗄️ Database & High Concurrency
* `phpdatabase_wrapper` - The Ultimate All-in-One PDO Database Singleton with dynamic CRUD operations.
* `phpmaster_slave` - Master-Slave Read/Write Splitting Architecture.
* `phpbatchinsert` - Optimized High-Concurrency Batch Inserts.
* `phptransaction` - Safe Database Transaction Block (Commit/Rollback).

### 📖 Quick Start: Ultimate Database Manager
Generate the class by typing `phpdatabase_wrapper` and hitting `Tab`. Once generated, you can easily perform secure, dynamic CRUD operations without writing raw SQL. PDO parameter binding is handled entirely in the background.

```php
require_once './Database.php';

// 1. Initialize the secure Singleton connection
$db = Database::getInstance();

// 2. Securely insert data
$insert_data = [
    'name'       => $name,
    'email'      => $email,
    'created_at' => date('Y-m-d')
];

$isInserted = $db->insert('users', $insert_data);
$newId = $db->lastInsertId();

// 3. Securely fetch data (Automatically uses prepared statements)
$activeUsers = $db->selectAll(
    'users', 
    ['status' => 'active'], // WHERE clause
    'id, name, email',      // Columns
    'created_at DESC',      // ORDER BY
    10                      // LIMIT
);
```


#### 🔒 Security & Authentication (Zero-Trust Aligned)
* `phpsecuresession_class` - Strict Session Class (Fingerprinting, Cloudflare proxy IP resolution, timeouts).
* `phpcsrf` - Secure CSRF Token Generation & Validation.
* `phpsecure_crypto` - AES-256-CBC File and Data Encryption.
* `phprecaptcha` - reCAPTCHA v3 API Risk Score Evaluation.
* `phpotp` - Cryptographically Secure OTP Generator.

#### 🌐 APIs, WebSockets & Compliance Reporting
* `phpxml` - Strict DOMDocument XML Generation (Designed for global FATCA/CRS compliance reporting).
* `phpsse` - Server-Sent Events (SSE) Stream for real-time browser communication.
* `phpcors` - Strict API CORS & Preflight `OPTIONS` Router.
* `phpcurl` - cURL Request Wrapper with Strict SSL Verification.
* `phpjson` - Standardized JSON API Response Payload.

#### 📁 File Handling & Background Execution
* `phpshell` - Secure Background Script Execution (Safely pass arguments to Python AI models or video frame processors).
* `phpupload` - Secure File Upload Handler (MIME validation, hex renaming).
* `phpcloudinary` - Cloudinary API Image Upload Integration.
* `phpdir` - Secure Directory Creation (0755 permissions).

## 🛠️ Installation
Install the `.vsix` package directly from the VS Code Extensions menu, or search for "PHPOcean" in the marketplace.

---
*Built for modern, secure, and highly scalable PHP development.*