/// <reference types="Cypress" />
//cypress - Spec

describe('Fake a call from a website', function()
{
    it('Making a GET call with fake data', function() {
        //Using intercept method
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        
        {
            statusCode: 200,
            body:
                [{
                    "book_name":"RestAssured with Java",
                    "isbn":"RSU",
                    "aisle":"2301"}]
        }).as('bookretrievals')
        //el CTA donde te lleva a la otra pag.
        cy.get('.btn-primary').click()
        //cy.wait('@bookretrievals')
        //length of the response array should match the rows of the table
        cy.wait('@bookretrievals').then(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     cy.get('p').should('have.text','Oops only 1 Book available')

        //length of the response array should match the rows of the table

})})
