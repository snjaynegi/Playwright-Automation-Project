# 🧪 Playwright Automation Project

This repository contains an automated end-to-end (E2E) testing framework built using **Microsoft Playwright**.  
It is designed for fast, reliable, cross-browser testing with clean architecture and maintainable test code.

## 📚 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Reports](#-reports)
- [Page Object Model Example](#-page-object-model-example)
- [Configuration](#-configuration)
- [GitHub Actions CI](#-github-actions-ci)

## 🚀 Features

- Cross-browser support: Chromium, Firefox, WebKit  
- Parallel test execution  
- Page Object Model (POM) design  
- Built-in screenshot, video, and trace capturing  
- HTML reporting  
- GitHub Actions CI integration  
- Automatic waiting to reduce flakiness  
- UI Mode for debugging  

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
  ```npx playwright show-report```

## 🧱 Page Object Model Example
```import { Page } from "@playwright/test";

export class Homepage{
    readonly page:Page;
    readonly search;
    readonly cart;
    readonly laptopPro;
    readonly WirelessMouse;
    readonly KeyboardRGB;
    readonly HeadphonesNoiseCancelling;
    readonly addToCart_laptopPro;
    readonly addToCart_WirelessMouse;
    readonly addToCart_KeyboardRGB;
    readonly addToCart_HeadphonesNoiseCancelling;
    readonly quantity_laptopPro;
    readonly quantity_WirelessMouse;
    readonly quantity_KeyboardRGB;
    readonly quantity_HeadphonesNoiseCancelling;

    constructor(page:Page){
        this.page = page;
        this.search = page.getByRole('searchbox', { name: 'Search' });
        this.cart = page.getByRole('button').filter({ hasText: /^$/ });
        this.laptopPro = page.getByText("Laptop Pro");
        this.addToCart_laptopPro = page.getByRole('button', { name: 'Add to Cart' }).first(); 
        this.WirelessMouse = page.getByText("Wireless Mouse").nth(1);
        this.addToCart_WirelessMouse = page.getByRole('button', { name: 'Add to Cart' }).nth(1);
        this.KeyboardRGB = page.getByText("Keyboard RGB").nth(2);
        this.addToCart_KeyboardRGB = page.getByRole('button', { name: 'Add to Cart' }).nth(2);
        this.HeadphonesNoiseCancelling = page.getByText("Headphones Noise Cancelling").nth(3);
        this.addToCart_HeadphonesNoiseCancelling= page.getByRole('button', { name: 'Add to Cart' }).nth(3);
        this.quantity_laptopPro= page.locator('#quantity-1').first();
        this.quantity_WirelessMouse= page.locator('#quantity-1').nth(1);
        this.quantity_KeyboardRGB = page.locator('#quantity-1').nth(2);
        this.quantity_HeadphonesNoiseCancelling = page.locator('#quantity-1').nth(3);
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
