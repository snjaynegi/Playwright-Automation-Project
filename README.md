# Playwright Automation Project

This repository contains an automated end-to-end (E2E) testing framework built using **Microsoft Playwright**.  
It is designed for fast, reliable, cross-browser testing with clean architecture and maintainable test code.

## Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Reports](#-reports)
- [Page Object Model Example](#-page-object-model-example)
- [Configuration](#-configuration)
- [GitHub Actions CI](#-github-actions-ci)

## Features

- Cross-browser support: Chromium, Firefox, WebKit  
- Parallel test execution  
- Page Object Model (POM) design  
- Built-in screenshot, video, and trace capturing  
- HTML reporting  
- GitHub Actions CI integration  
- Automatic waiting to reduce flakiness  
- UI Mode for debugging  

## Project Structure

project/
- tests/ # Test spec files
- pages/ # Page Object Model classes
- fixtures/ # Custom fixtures (optional)
- utils/ # Helper utilities
- playwright.config.ts # Playwright main configuration
- package.json
- README.md

## Reports
```npx playwright show-report```

## Page Object Model
```ts
import { Page } from "@playwright/test";
    export class Homepage{
    readonly page:Page;
    readonly search;
    readonly cart;
    readonly laptopPro;
    readonly WirelessMouse;
    readonly KeyboardRGB;
    
    constructor(page:Page){
        this.page = page;
        this.search = page.getByRole('searchbox', { name: 'Search' });
        this.cart = page.getByRole('button').filter({ hasText: /^$/ });
        this.laptopPro = page.getByText("Laptop Pro");
        this.addToCart_laptopPro = page.getByRole('button', { name: 'Add to Cart' }).first(); 
        this.WirelessMouse = page.getByText("Wireless Mouse").nth(1);    
    }
    async searchAction(item:string) {
       await this.search.fill(item);
    }
    async CartAction() {
       await this.cart.click();
    }
    async addToCartLaptopPro() {
        await this.addToCart_laptopPro.click();
    }

# Config file
```ts
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

