// ***********************************************
Cypress.Commands.add('bukaUrl', () => {
    cy.visit('https://bukalapak.com');
});

Cypress.Commands.add('menuDaftar', () => {
    cy.visit('https://bukalapak.com');
    cy.contains('Daftar').click();
});

Cypress.Commands.add('onlineShop',() => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.wait(500);
});

Cypress.Commands.add('loginStore',() => {
    cy.onlineShop();
    cy.get('#login2').contains('Log in').click();
    cy.wait(100);
    cy.get('#loginusername').click().type('dojo-piero',{force:true}).should("have.value","dojo-piero");
    cy.get('#loginpassword').click().type('p@ssw0rd',{force:true}).should("have.value","p@ssw0rd");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer').contains("Log in").click();
    cy.wait(1000);
})

