/// <reference types="Cypress" />

describe('', () => 
{
    it('', () => {
        cy.log().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
})