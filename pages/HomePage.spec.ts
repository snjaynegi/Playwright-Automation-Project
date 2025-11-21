import { Page } from "@playwright/test";

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
        this.quantity_laptopPro= page.locator('quantity-1').first();
        this.quantity_WirelessMouse= page.locator('quantity-1').nth(1);
        this.quantity_KeyboardRGB = page.locator('quantity-1').nth(2);
        this.quantity_HeadphonesNoiseCancelling = page.locator('quantity-1').nth(2);
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

    async addToCartWirelessMouse() {
        await this.addToCart_WirelessMouse.click();
    }

    async addToCartKeyboardRGB() {
        await this.addToCart_KeyboardRGB.click();
    }

    async addToCartHeadphonesNoiseCancelling() {
        await this.addToCart_HeadphonesNoiseCancelling.click();
    }
}