import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import shopping from '../page-objects/shoppping.page';


Given(/^I am on the shopping website (.+) and I add product (.+) to the cart$/, async function (homepageurl,productname) {
    await browser.url(homepageurl);
    await browser.maximizeWindow()
    await shopping.home.click();

    const productNames = await shopping.productnames;
    await shopping.selectElement(productNames, productname);
    await shopping.addtocart.click();
    await shopping.checkout.click();


});



Then(/^I should be able to checkout the order and reach payment page to verify the product details (.+) and cost (.+)$/, async function (productname,productprice) {

    let itemname = await shopping.itemnameconfirm.getText();
    let itemcost = await shopping.itemcostconfirm.getText();

    await expect(itemname).toEqual(productname)
    await expect(itemcost).toEqual(productprice)
    
});
