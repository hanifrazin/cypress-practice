describe('Test Module Register',() => {
    before(() => {
        cy.onlineShop();
    })

    it('TC-001 Input valid register',() => {
        cy.get('#signin2').contains("Sign up").click();
        cy.wait(100);
        cy.get('#sign-username').type("dojo-piero", {force:true}).should('have.value','dojo-piero');
        cy.get('#sign-password').type("p@ssw0rd", {force:true}).should("have.value","p@ssw0rd");
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(100);
    })
})