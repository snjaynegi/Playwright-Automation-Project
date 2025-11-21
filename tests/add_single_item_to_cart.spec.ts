import {test, expect} from '@playwright/test'
import { navigateToUrl, takeScreenshot } from '../helpers/helper.spec'
import { Homepage } from '../pages/HomePage.spec'

test.describe('Add to cart', async() => {

    test('Add to cart single item', async ({page}) => {
        //URL.
        await navigateToUrl(page);
        //Assertion for main URL.
        await expect(page).toHaveTitle('Dummy E-commerce | TesterBud');
        //Object for first item on Home Page.
        const items = new Homepage(page);
        await items.addToCartLaptopPro();
        await expect(page.getByRole('button',{name:'1'})).toBeVisible();
    })
})