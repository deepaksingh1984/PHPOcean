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

#### 🔒 Security & Authentication (Zero-Trust Aligned)
* `phpsecuresession_class` - Strict Session Class (Fingerprinting, Cloudflare proxy IP resolution, timeouts)
* `phpsession` - Basic Secure Session Initialization (OWASP compliant)
* `phpcsrf` - Secure CSRF Token Generation & Validation
* `phpsecure_crypto` - AES-256-CBC File and Data Encryption
* `phprecaptcha` - reCAPTCHA v3 API Risk Score Evaluation
* `phpotp` - Cryptographically Secure OTP Generator
* `phppassword_hash` - Bcrypt Password Hashing
* `phpsanitize` - Strict Input Sanitization

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

## 🛠️ Installation
Install the `.vsix` package directly from the VS Code Extensions menu. 

---
*Built for modern, secure, and highly scalable PHP development.*