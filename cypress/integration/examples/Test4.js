/// <reference types="Cypress" />

describe('My third test with checkboxes', function() {
    it('Checkboxes', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert', (str)=> {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //window confirmation
        cy.on('window:confirm', (str)=> {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // validate if you are in the right URL
        cy.url().should('include', 'rahulshettyacademy')

        cy.go('back')





    })
})