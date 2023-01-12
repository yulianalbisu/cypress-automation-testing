/// <reference types="Cypress" />

describe('API test request', function() {


    it('test request with POST', function() 
    {
        cy.request('POST', 'http://216.10.245.166/Library/AddBook.php', {

        "name": "Learn Appium Automation with Java",
        "author": "John foe"}).then(function()
        {
            expect(response.status).to.eq(200)
        })
        })
    })