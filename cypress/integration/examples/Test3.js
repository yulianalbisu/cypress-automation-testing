/// <reference types="Cypress" />

describe('My third test with checkboxes', function() {
    it('Checkboxes', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //verify my checkbox is checked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //validate if opt 1 is the one checked
        //unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})