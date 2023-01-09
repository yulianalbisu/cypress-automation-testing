/// <reference types="Cypress" />

describe('Frames test', function() {
    it('Checkboxes', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Going to a new webpage resolving href
        cy.get('#opentab').then(function(el){
            const url= el.prop('href')
            cy.visit(url)

        })




    })
})