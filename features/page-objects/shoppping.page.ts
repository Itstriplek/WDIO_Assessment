import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingPage  {

        get home(){return $('//a[contains(text(),"Home")]')}
        get productnames(){return $$('//a[@class="prdocutname"]');}  
        //get productprices(){return $$('//div[@class="oneprice"]');}     
        
        get productprice(){return $('.productfilneprice');}
        get addtocart(){return $('//a[normalize-space()="Add to Cart"]');}
        get checkout(){return $('#cart_checkout1');}

        get shipping(){return $('//h4[contains(text(),"Shipping")]');}
        get payment(){return $('//h4[contains(text(),"Payment")]');}
        get itemnameconfirm(){return $('a[class="checkout_heading"]');}
        get itemcostconfirm(){return $('td[class="checkout_heading"]');}
        get confirmorder(){return $('//button[@id="checkout_btn"]');}


        async selectElement(elements: WebdriverIO.ElementArray, value: string){
        for (const element of elements) {
                const identity = await element.getAttribute('title');
                if (identity === value) {
                    await element.click();
                    break;
                }

        }

        
}

}

export default new ShoppingPage();
