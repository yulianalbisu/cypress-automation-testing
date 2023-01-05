/// <reference types="Cypress" />
//cypress - Spec

describe('my firs test suite', function()
{
    it('My first test case', function() {
    //test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    //parent child chaining
    cy.get('.products').as('parentProduct')
    cy.get('@parentProduct').find('.product').should('have.length',4)
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('@parentProduct').find('.product').eq(2).contains('ADD TO CART')
    //iterating each element
    cy.get('@parentProduct').find('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()
    if(textVeg.includes('Cashews')){
        cy.wrap($el).find('button').click()
    }
    })
    //assert if logo text is correctly display
    cy.get('.brand').should('have.text', 'GREENKART')
    const logo = cy.get('.brand').then(function(logoelement)
    {
        // Print in logs, text is not a cypress command is a variable method
cy.log(logoelement.text())
    })
})})