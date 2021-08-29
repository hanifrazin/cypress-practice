describe('Test Module Login',() => {
    it('TC-002 Input valid login',() => {
        cy.onlineShop();
        cy.get('#login2').contains('Log in').click();
        cy.wait(100);
        cy.get('#loginusername').click().type('dojo-piero',{force:true}).should("have.value","dojo-piero");
        cy.get('#loginpassword').click().type('p@ssw0rd',{force:true}).should("have.value","p@ssw0rd");
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer').contains("Log in").click();
        // cy.get('#loginusername').should('have.value','dojo-piero');
    })
})