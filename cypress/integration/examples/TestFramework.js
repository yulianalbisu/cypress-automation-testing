/// <reference types="Cypress" />

describe('Testing, using before and after', function() {

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            //this variable needs to be global so, we are making new variable
            this.data = data

        })
    })

    it('Using before and after', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        
        cy.get('select').select('Female')

        //1. validate the name is the same in both boxes for input name.
        cy.get(':nth-child(1) > .form-control').should('have.value', this.data.name)
        //2. minlength, validate is lenght is 2 or more.
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        //3. confirm if radio is disabled
        cy.get('#inlineRadio3').should('be.disabled')

        // go to direct link
        cy.get(':nth-child(2) > .nav-link').click()

        //Getting both elements
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        //Getting elements through json example file

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
    
    })

})