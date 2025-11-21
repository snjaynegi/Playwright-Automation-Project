# 🧪 Playwright Automation Project

This repository contains an automated end-to-end (E2E) testing framework built using **Microsoft Playwright**.  
It is designed for fast, reliable, cross-browser testing with clean architecture and maintainable test code.

---

## 📚 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Reports](#-reports)
- [Page Object Model Example](#-page-object-model-example)
- [Configuration](#-configuration)
- [GitHub Actions CI](#-github-actions-ci)

---

## 🚀 Features

- Cross-browser support: Chromium, Firefox, WebKit  
- Parallel test execution  
- Page Object Model (POM) design  
- Built-in screenshot, video, and trace capturing  
- HTML reporting  
- GitHub Actions CI integration  
- Automatic waiting to reduce flakiness  
- UI Mode for debugging  

---

## 📂 Project Structure

project/
- tests/ # Test spec files
- pages/ # Page Object Model classes
- fixtures/ # Custom fixtures (optional)
- utils/ # Helper utilities
- playwright.config.ts # Playwright main configuration
- package.json
- README.md

## 📊 Reports
npx playwright show-report

## 🧱 Page Object Model Example
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}

## ⚙️ Playwright Config Example
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report' }]
  ],
});


