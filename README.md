# PHPOcean 🌊
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/deepakbsingh)


[![Install from VS Code Marketplace](https://img.shields.io/badge/Install_from-VS_Code_Marketplace-0066b8?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://marketplace.visualstudio.com/items?itemName=YOUR_PUBLISHER_NAME.phpocean)

PHPOcean is an enterprise-grade PHP code intelligence and security extension for Visual Studio Code. Built specifically for developers handling high-concurrency databases, strict zero-trust security environments, and specialized API architectures, it helps you ship compliant, high-performance applications faster.

## 🛡️ Real-Time OWASP Security Linter & Quick Fixes
PHPOcean acts as a live security auditor, scanning your code as you type to prevent critical vulnerabilities before they reach production—with zero AST parsing overhead.

**Detects & Flags:**
* **SQL Injection (SQLi):** Flags unsafe variable interpolation inside database queries, utilizing a smart whitelist for structural variables.
* **Cross-Site Scripting (XSS):** Warns when superglobals (`$_GET`, `$_POST`) are output directly to the browser.
* **Session Hijacking:** Detects insecure `session_start()` configurations while intelligently respecting global strict cookie setups.
* **Cryptographic Failures:** Warns against outdated hashing algorithms like `md5()` and `sha1()`.

💡 **Intelligent Quick Fixes:** Spot a vulnerability? Click the VS Code Lightbulb (`Ctrl + .`) to instantly rewrite the code using secure, modern PHP standards (e.g., auto-wrapping outputs in `htmlspecialchars()`, or upgrading hashes to `password_hash()`).

## 🧠 Dynamic PHP Code Intelligence
Forget switching tabs to check the official documentation. PHPOcean includes a locally parsed, sub-millisecond knowledge base powered by official PHP Stubs.
* **Intelligent Hover Tooltips:** Instantly view function descriptions, parameter types, and return values.
* **Smart Autocomplete:** Native VS Code completion for standard PHP functions, PDO, MySQLi, and cURL, automatically dropping your cursor inside the required parameters.

![Database Class Demo](https://res.cloudinary.com/techmeshblog/image/upload/v1772899602/databse_up0ece.gif)

## 🚀 High-Performance Snippet Library
Stop rewriting the same configurations. Type a prefix and hit `Tab` to drop production-ready, highly secure architecture directly into your workspace.

![Snippet Demo Session Security](https://res.cloudinary.com/techmeshblog/image/upload/v1772899602/session_klouvm.gif)

#### 🗄️ Database & High Concurrency
* `phpdatabase_wrapper` - The Ultimate All-in-One PDO Database Singleton with dynamic CRUD operations.
* `phpencrypt_pii` - Application-Level PII Encryptor (AES-256-GCM) for highly sensitive database columns.
* `phpmaster_slave` - Master-Slave Read/Write Splitting Architecture.
* `phpbatchinsert` - Optimized High-Concurrency Batch Inserts.
* `phptransaction` - Safe Database Transaction Block (Commit/Rollback).
* `phpetl_batch` - Memory-safe ETL Batch Processor using PHP Generators (`yield`) for migrating millions of records.

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

### 📖 Quick Start: Memory-Safe ETL Batch Processing
Type `phpetl_batch` to generate a CSV processor that holds a flat memory footprint, no matter how massive the file is.
```php
$db = Database::getInstance();

// Processes millions of rows by fetching and yielding exactly 1,000 at a time
foreach (processCsvInBatches('legacy_data_dump.csv', 1000) as $chunk) {
    $db->insertBatch('erp_table_name', $chunk);
}
```

## 🔒 Security & Authentication (Zero-Trust Aligned)
* `phphtaccess_secure` - Enterprise-grade secure .htaccess forcing HTTPS, blocking hidden files, and injecting strict security headers.
* `phpcsp_header` - Strict Content-Security-Policy (CSP) generator with cryptographic nonces to defeat XSS.
* `phpjwt` - Zero-dependency JSON Web Token (JWT) encoder and decoder with HS256 signature verification.
* `phpsecuresession_class` - Strict Session Class (Fingerprinting, Cloudflare proxy IP resolution, timeouts).
* `phpcsrf` - Secure CSRF Token Generation & Validation.
* `phpsecure_crypto` - AES-256-CBC File and Data Encryption.
* `phpuuid` - Cryptographically Secure RFC 4122 UUID v4 Generator.
* `phpuuid_validate` - Strict UUID v4 Regex Validator to prevent SQL injection at the application edge.
* `phprecaptcha` - reCAPTCHA v3 API Risk Score Evaluation.
* `phpotp` - Cryptographically Secure OTP Generator.

### 📖 Quick Start: Secure Sessions
Type `phpetl_batch` to generate a CSV processor that holds a flat memory footprint, no matter how massive the file is.

```php
require_once './SecureSession.php';

// 1. Initialize the Session class
$session = new SecureSession();

// 2. Start the session securely
$session->start();

```

## 🌐 APIs, WebSockets & Compliance Reporting
* `phpapi_secure` - Secure API Endpoint (Bearer token validation, Nginx/Apache header fallbacks, JSON decoding).
* `phpssrf_block` - SSRF Defender. Strict URL fetcher that blocks Server-Side Request Forgery attempts on internal IP ranges.
* `phpwebhook_hmac` - Secure Webhook Receiver with HMAC signature verification and timing-attack prevention.
* `phpratelimit` - High-concurrency API Rate Limiter utilizing atomic Redis increments to block brute-force attacks.
* `phpsse` - Server-Sent Events (SSE) Stream for real-time browser communication.
* `phpcors` - Strict API CORS & Preflight OPTIONS Router.
* `phpcurl` - cURL Request Wrapper with Strict SSL Verification.
* `phpjson` - Standardized JSON API Response Payload.

## 📖 Quick Start: Secure API Endpoint
Type `phpapi_secure` to instantly generate an endpoint that validates methods, checks Bearer tokens securely, and decodes incoming JSON payloads.

```PHP
// Automatically handles POST validation and Nginx/Apache Authorization headers
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? (function_exists('getallheaders') ? (getallheaders()['Authorization'] ?? '') : '');

$validAuthCode = 'Bearer your-secret-auth-code';

// Uses hash_equals to prevent timing attacks
if (!hash_equals($validAuthCode, $authHeader)) {
    http_response_code(403); 
    echo json_encode(['error' => 'Invalid authorization code']);
    exit;
}
```

## 📖 Quick Start: Redis API Rate Limiting
Type `phpratelimit` to drop in an atomic, thread-safe rate limiter.

```php
$redis = new \Redis();
$redis->connect('127.0.0.1', 6379);
$limiter = new ApiRateLimiter($redis);

// Limit by IP Address (e.g., max 60 requests per 60 seconds)
$limiter->checkLimit($_SERVER['REMOTE_ADDR'], 60, 60);
```

## 📁 File Handling & Background Execution
* `phpshell` - Secure Background Script Execution (Safely pass arguments to Python AI models or video frame processors).
* `phpupload` - Secure File Upload Handler (MIME validation, hex renaming).
* `phpcloudinary` - Cloudinary API Image Upload Integration.
* `phpdir` - Secure Directory Creation (0755 permissions).

### 🛠️ Installation

![🚀 Click here to install PHPOcean directly from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=DeepakSingh.phpocean)

1. Alternatively, you can install it from inside VS Code:
2. Open the Extensions view (`Ctrl+Shift+X` on Windows/Linux, `Cmd+Shift+X` on macOS).
3. Search for PHPOcean.
4. Click **Install**.