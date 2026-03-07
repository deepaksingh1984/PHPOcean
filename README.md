# PHPOcean 🌊
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/deepakbsingh)
PHPOcean is an enterprise-grade PHP code intelligence and snippet extension for Visual Studio Code. It is built specifically for developers handling high-concurrency databases, strict zero-trust security environments, and specialized API or background processing architectures.

## 🚀 Features

### 1. Dynamic PHP Code Intelligence
Forget switching tabs to check the official documentation. PHPOcean includes a locally parsed, sub-millisecond knowledge base powered by official PHP Stubs.
* **Intelligent Hover Tooltips:** Instantly view function descriptions, parameter types, and return values.
* **Smart Autocomplete:** Native VS Code completion for standard PHP functions, PDO, MySQLi, and cURL, automatically dropping your cursor inside the required parameters.
* **Direct Documentation Links:** Click directly through to the official `php.net` manual from the hover tooltip.

### 2. High-Performance Snippet Library
Type the prefix and hit `Tab` to instantly scaffold robust, production-ready code.

#### 🏗️ Core OOP & Architecture
* `phpclass` - Standard Class with Namespace
* `phpinterface` / `phptrait` - Standard Interfaces and Traits
* `phpconstruct8` - PHP 8+ Constructor with Property Promotion
* `phpgetset` - Fluent Getter and Setter Pair
* `phpenum` - PHP 8.1+ Backed Enum

#### 🗄️ Database & High Concurrency (Optimized for massive user loads)
* `phpdb_crud` - Comprehensive Database Wrapper (PDO Singleton, CRUD, JOINs)
* `phpdb` - Secure PDO Singleton Connection
* `phpmaster_slave` - Master-Slave Read/Write Splitting Architecture
* `phpbatchinsert` - Optimized High-Concurrency Batch Inserts
* `phptransaction` - Safe Database Transaction Block (Commit/Rollback)
* `phpsel`, `phpupdate`, `phpdelete` - Secure Prepared Statements

### 🚀 Instant Intelligence
Get the full Database Class. Just hover and code.
![Database Calass Demo](https://res.cloudinary.com/techmeshblog/image/upload/v1772708596/database_qkrq0q.gif)



#### 🔒 Security & Authentication (Zero-Trust Aligned)
* `phpsecuresession_class` - Strict Session Class (Fingerprinting, Cloudflare proxy IP resolution, timeouts)
* `phpsession` - Basic Secure Session Initialization (OWASP compliant)
* `phpcsrf` - Secure CSRF Token Generation & Validation
* `phpsecure_crypto` - AES-256-CBC File and Data Encryption
* `phprecaptcha` - reCAPTCHA v3 API Risk Score Evaluation
* `phpotp` - Cryptographically Secure OTP Generator
* `phppassword_hash` - Bcrypt Password Hashing
* `phpsanitize` - Strict Input Sanitization

### 🛠️ Enterprise Snippets
Session Security in a second.
![Snippet Demo Seeeison Security](https://res.cloudinary.com/techmeshblog/image/upload/v1772710172/session_daegmf.gif)



#### 🌐 APIs, WebSockets & Compliance Reporting
* `phpxml` - Strict DOMDocument XML Generation (Designed for global FATCA/CRS compliance reporting)
* `phpsse` - Server-Sent Events (SSE) Stream for real-time browser communication
* `phpcors` - Strict API CORS & Preflight `OPTIONS` Router
* `phpcurl` - cURL Request Wrapper with Strict SSL Verification
* `phpjson` - Standardized JSON API Response Payload

#### 📁 File Handling & Background Execution
* `phpshell` - Secure Background Script Execution (Safely pass arguments to Python AI models or video frame processors, ensuring strict sequential naming like `0001`)
* `phpupload` - Secure File Upload Handler (MIME validation, hex renaming)
* `phpcloudinary` - Cloudinary API Image Upload Integration
* `phpencrypt_file` - OpenSSL File Encryption
* `phpdir` - Secure Directory Creation (0755 permissions)


### 3. PHPOcean: The PHP Intelligence Layer

PHPOcean is an enterprise-grade extension designed to eliminate boilerplate, enforce secure coding architectures, and provide real-time intelligence for PHP developers. Built for speed and security, it helps you ship compliant, high-performance applications faster.

## 🛡️ NEW: Real-Time OWASP Security Linter
PHPOcean now acts as a live security auditor, scanning your code as you type to prevent critical vulnerabilities before they reach production. 

**Detects & Flags:**
* **Cryptographic Failures:** Warns against outdated algorithms like `md5()` and `sha1()`.
* **SQL Injection (SQLi):** Flags unsafe variable interpolation inside database queries.
* **Cross-Site Scripting (XSS):** Warns when superglobals (`$_GET`, `$_POST`) are output directly to the browser.
* **Session Hijacking:** Detects insecure `session_start()` configurations.

## 💡 Intelligent Quick Fixes
Spot a vulnerability? Just click the VS Code Lightbulb (`Ctrl + .`) to instantly rewrite the code using secure, modern PHP standards.
* Instantly upgrade `md5()` to `password_hash()` or `hash('sha256')`.
* Automatically wrap vulnerable `echo` outputs in `htmlspecialchars()`.
* Inject strict cookie parameters (`httponly`, `samesite=Strict`) into bare sessions.

## 🚀 Enterprise Snippet Architecture
Stop rewriting the same configurations. Type a trigger keyword and hit `Tab` to drop production-ready architecture directly into your workspace.

**Popular Commands:**
* `phpdatabase_wrapper` - Drops a strict, high-performance PDO Singleton wrapper which generates a comprehensive Database class with dynamic, secure bindings.
* `phpmaster_slave` - Instantly scaffolds a Read/Write database connection pool.
* `phpsecuresession_class` - Implements a highly secure, fingerprint-verified session manager.
* `phpsanitize` - Drops in a standardized input sanitization method.

## 🧠 Hover Intelligence & Autocomplete
Get instant documentation, parameter signatures, and direct links to the official PHP manual simply by hovering over native PHP functions.


## 🛠️ Installation
Install the `.vsix` package directly from the VS Code Extensions menu. 

---
*Built for modern, secure, and highly scalable PHP development.*
