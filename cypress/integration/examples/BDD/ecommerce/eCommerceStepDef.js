import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductName from "../../../pageObjects/ProductName";

const homePage = new HomePage()
const productName = new ProductName()

Given('I open ECommerce page', () => 
{
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

//When I add items to cart
When('I add items to cart', function () 
{
    getShopTab().click()


        this.data.productName.forEach(function(element) {

            cy.selectProduct(element)
        })

            productName.checkoutButton().click()
})

//And
When('Validate the total prices', () => 
{

    productName.checkoutButton().click()
    var sum=0

    // Here we are going to get the prices
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount = $el.text()
        var res= amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
    }).then(function() 
    {
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element)
    {
        const amount = element.text()
        var res= amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
    

}) 

//Then 
Then('select the country submit and verify thankyou', () => 
{
    cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function(el)
    {

        const actualText = el.text()
            expect(actualText.includes("Success")).to.be.true

            })
})