# Readmigo Website Project Guidelines

## Project Overview

Marketing website for Readmigo - AI-powered English reading companion.

## Project Structure

```
├── assets/               # Static assets (favicon, etc.)
├── support/              # Support pages
├── zh/                   # Chinese language version
├── index.html            # English homepage
├── zh/index.html         # Chinese homepage
├── privacy.html          # Privacy policy
├── terms.html            # Terms of service
├── credits.html          # Credits/Attribution
├── support.html          # Support/Help center
├── reset-password.html   # Password reset
├── _headers              # Cloudflare Pages headers config
└── _redirects            # Cloudflare Pages redirects config
```

## Development Rules

### Tech Stack

- Static HTML with Tailwind CSS (via CDN)
- Bilingual: English (`/`) and Chinese (`/zh/`)
- No build step required

### Deployment

- Platform: Cloudflare Pages
- Project name: `readmigo`
- Deploy command: `unset HTTP_PROXY HTTPS_PROXY ALL_PROXY http_proxy https_proxy all_proxy && wrangler pages deploy . --project-name=readmigo --branch=main`
- Note: Must unset proxy env vars before deploying, otherwise wrangler auth fails
- Domains: readmigo.pages.dev, readmigo.app

## Investigation & Problem Analysis

When investigating problems, output using this template:
```
问题的原因：xxx
解决的思路：xxx
修复的方案：xxx
```

## Online Services

| Environment | URL |
|-------------|-----|
| Production | https://readmigo.app |

## Readmigo Team Knowledge Base

所有 Readmigo 项目文档集中存储在：`/Users/HONGBGU/Documents/readmigo-repos/docs/`
当需要跨项目上下文（产品需求、架构决策、设计规范等）时，主动到 docs 目录读取相关文档。
