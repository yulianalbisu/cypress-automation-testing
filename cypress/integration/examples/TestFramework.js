/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductName from "../pageObjects/ProductName"

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

        const homePage = new HomePage()
        const productName = new ProductName()
            cy.visit('https://rahulshettyacademy.com/angularpractice/')

        
        homePage.getEditBox().type(this.data.name)
        
        homePage.getGender().select('Female')

        //1. validate the name is the same in both boxes for input name.
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //2. minlength, validate is lenght is 2 or more.
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        //3. confirm if radio is disabled
        homePage.getEntrepreneaur().should('be.disabled')

        // go to direct link
        homePage.getShopTab().click()

        

        //Getting both elements
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        //Getting elements through json example file

        this.data.productName.forEach(function(element) {

            cy.selectProduct(element)
            productName.checkoutButton().click()
            cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
            cy.get('#country').type('India')
            //cy.get('.suggestions > ul > li > a').click({force:true})
            cy.get('#checkbox2').click({force:true})
            cy.get('input[type="submit"]').click()
            //cy.get('.alert).should('have.text', 'your message here')
            cy.get('.alert').then(function(el){

                const actualText = el.text()
                expect(actualText.includes("Success")).to.be.true

            })
        })
    
    })

})