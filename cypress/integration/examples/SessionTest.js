/// <reference types="Cypress" />


describe('trying to purchase', () => 
{
    before(()=>{
        cy.loginAPI();
    });
    it('My click Add to cart button', () => {
        const token = Cypress.env("token");
        const url = Cypress.env("url") + "/client/";
        cy.visit(url, 
            { 
                onBeforeLoad : (window)=> {
                    window.localStorage.setItem("token", token);
                } 
            }
        );
        cy.get(".card-body button:last-of-type").eq(0).click();
        
    });
    
    it('should load cart page', () => {
        cy.get('[routerlink="/dashboard/cart"]').click();
    });

}
)
