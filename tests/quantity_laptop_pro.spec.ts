import {test, expect} from '@playwright/test'
import { navigateToUrl, takeScreenshot } from '../helpers/helper.spec'
import { Homepage } from '../pages/HomePage.spec'

test.describe('Adding quantity on home page', async () => {

    test('Test for adding qunatity 4 for laptop pro', async({page}) =>{
        //URL
        await navigateToUrl(page);
        //Assertion for main URL.
        await expect(page).toHaveTitle('Dummy E-commerce | TesterBud');
        // Object for Home Page POM file.
        const home = new Homepage(page);
        //Click on add quantity field
        home.clickAddQuantityLaptopPro
        //Add quantity 4 for laptop_pro
        home.addQuantityLaptopPro('4');
        //Add to cart laptop_pro
        home.addToCartLaptopPro();
        //Assertion for added product to cart
        const cartButton = page.locator('button.btn-outline-light');
        await expect(cartButton.locator('span.badge')).toHaveText('4');
    })
})