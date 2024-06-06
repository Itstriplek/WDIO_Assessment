Feature: Automation Test Store

  Scenario Outline: As a user, I can access the website and initiate registration

    Given I open the website and load the web URL <homepageurl>
    When I click on the login/registration option
    Then I should be taken to a new page in which start registration

    Examples:
      | homepageurl                         | header                | 
      | https://automationteststore.com/    | Login or register     | 
     

 Scenario Outline: As a user, I can access the registration form and fill the details

        Given I am on account creation page as a new customer
        Then I click on continue button present under "I am a new user" section
        When I enter firstname <fname> ,lastname <lname>, email <email>, telephone <telephone> and company name <companyname>
        Then I enter address <address>, city <city>, state <state>, zipcode <zipcode>, country <country>
        Then I enter the login name<loginname>, password <password>, confirmation password again <password>, check the privacy policy and click on continue
        Then I will be shown a success message that my account has been created and I validate my displayed details

        
        Examples:
            | fname    | lname   | email                 | telephone  | companyname | address               | city       | state       | zipcode  | country       | loginname  | Password     |
            | Rajine   | Kantha  | superstar06@gmail.com | 9999999999 | Red Dragon  | highway 10,  seifiled | Manchester | Lancashire | HA456T3  | United Kindgom | rajini06   | testing@1234 |

  Scenario Outline: As a registered user, I can add products to the cart

    Given I am on the shopping website <homepage> and I add product <productname> to the cart
    Then I should be able to checkout the order and reach payment page to verify the product details <productname> and cost <productprice>
 
     Examples:
      | homepage                          | productname              | productprice | 
      | https://automationteststore.com/  | Skinsheen Bronzer Stick  | $29.50       | 