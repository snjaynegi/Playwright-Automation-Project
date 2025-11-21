import {test, expect} from '@playwright/test'
import { navigateToUrl, takeScreenshot } from '../helpers/helper.spec'
import { Homepage } from '../pages/HomePage.spec'

test.describe('Add to cart multiple item', async() => {
    test('Add to cart multiple item', async ({page}) => {
        //URL
        await navigateToUrl(page);
        //Assertion for main URL.
        await expect(page).toHaveTitle('Dummy E-commerce | TesterBud');
        //Object for first item on Home Page.
        const items = new Homepage(page);
        //Adding mutiple item to cart.
        await items.addToCartLaptopPro();
        await items.addToCartWirelessMouse();
        await items.addToCartKeyboardRGB();
        await items.addToCartHeadphonesNoiseCancelling();
        const cartButton = page.locator('button.btn-outline-light');
        await expect(cartButton.locator('span.badge')).toHaveText('4');
    })
})