/// <reference types="Cypress" />
//cypress - Spec

describe('my firs test suite', function()
{
    it('My first test case', function() {
    //test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').should('have.length',4)
})})