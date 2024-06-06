import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import register from '../page-objects/register.page' 



Given(/^I open the website and load the web URL (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl);
    await browser.maximizeWindow()
  });
  
  Then(/^I should see the register option as (.+)$/, async function (header) {

    
    await expect( register.header.getText()).toEqual(header);
  });

  When(/^I click on the login\/registration option$/, async function () { 

    await register.header.click();
});

Then(/^I should be taken to a new page in which start registration$/, async function () {
    
    await expect(register.account).toBeDisplayed(); 

});

Given(/^I am on account creation page as a new customer$/, async function () {
     
    await browser.isElementSelected('#accountFrm_accountregister')
});

Then(/^I click on continue button present under "I am a new user" section$/, async function () {
    await register.continue.click();
});

When(/^I enter firstname (.+) ,lastname (.+), email (.+), telephone (.+) and company name (.+)$/, async function (fname, lname, email, telephone, companyname) {
    await(await register.fname).setValue(fname)
    await(await register.lname).setValue(lname)
    await(await register.email).setValue(email)
    await(await register.telephone).setValue(telephone)
    await(await register.company).setValue(companyname)

});

Then(/^I enter address (.+), city (.+), state (.+), zipcode (.+), country (.+)$/, async function (address, city, state, zipcode, country) {
    await(await register.address).setValue(address)
    await(await register.city).setValue(city)
    await(await register.state).selectByVisibleText(state)
    await(await register.zipcode).setValue(zipcode)
});

Then(/^I enter the login name(.+), password (.+), confirmation password again (.+), check the privacy policy and click on continue$/, async function (loginname, password, confirmpassword) {
    await(await register.username).setValue(loginname)
    await(await register.password).setValue(password)
    await(await register.confpassword).setValue(confirmpassword)
    await register.policy.click();
    await register.confirm.click();

});

Then(/^I will be shown a success message that my account has been created and I validate my displayed details$/, async function () {
    console.log(register.registereduser)
});


