beforeEach(function() {

    cy.fixture('example').then(function(data)
        {
            //this variable needs to be global so, we are making new variable
            this.data = data

        })
        
})