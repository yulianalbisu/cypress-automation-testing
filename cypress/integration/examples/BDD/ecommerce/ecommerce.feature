Feature: End to end Ecommerce validation

    application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce pageWhen I fill the form details
    When I fill the form details
    | name  |  gender |
    | bobz  |  Male   |

    Then validate the form behaviour
    And select the Shop page
