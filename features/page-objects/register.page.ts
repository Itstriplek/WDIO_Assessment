//import Page from "../../AutomationTestStore/src/page";

class testRegistration 

{
    get header(){ return $('#customer_menu_top');}
    get account(){return $('.maintext');}
    get radiobtn(){return $('#accountFrm_accountregister');}
    get continue(){return $('button.btn-orange[title="Continue"]');}
    get createAccount(){return $('.maintext');}
    get loginLink(){return $("//a[contains(text(),'login page')]");}

    get fname(){return $("//input[@id='AccountFrm_firstname']");}
    get lname(){return $("//input[@id='AccountFrm_lastname']");}
    get email(){return $("//input[@id='AccountFrm_email']");}
    get telephone(){return $("#AccountFrm_telephone");}
    get company(){return $("[name = 'company']");}
    get address(){return $('#AccountFrm_address_1');}
    get city(){return $('//input[@id="AccountFrm_city"]');}
    get state(){return $('#AccountFrm_zone_id');}
    get zipcode(){return $("[name = 'postcode']");}
    get country(){return $('#AccountFrm_country_id');}

    get username(){return $('//input[@id="AccountFrm_loginname"]');}
    get password(){return $('#AccountFrm_password')}
    get confpassword(){return $("//input[@id='AccountFrm_confirm']");}
    get policy(){return $('//input[@id="AccountFrm_agree"]');}
    get confirm(){return $('button[title="Continue"]')}

    get registereduser(){return $("//div[contains(text(),'Welcome back')]")}
}



export default new testRegistration()