import {Page, expect} from '@playwright/test'

export async function navigateToUrl( page:Page){
    await page.goto('https://testerbud.com/practice-ecommerece-website');
}

export async function takeScreenshot(name:string, page:Page){
    const path = `/snapshot/${name}.png`;
    await page.screenshot({path,fullPage:true})
}