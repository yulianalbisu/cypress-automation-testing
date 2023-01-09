/// <reference types="Cypress" />

describe('Testing, using before and after', function() {

    before(function() {
        // runs once before all tests in the block
    })
    it('Using before and after', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(1) > .form-control').type('Bob')
        
        cy.get('select').select('Female')
    })



})