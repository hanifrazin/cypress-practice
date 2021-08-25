describe('test scenario day 2', function(){
    it('belajar contains',function(){
        cy.visit('https://www.bukalapak.com/');
        cy.contains('Daftar').click();
        cy.get('.mv-48').should('exist');
        cy.get('.bl-text-field__input').type('hanif').should('have.value','hanif')
        // cy.get('.bl-link > .pr-4').click();
        // cy.get('.bl-text-field__inner').type('hanif');
        // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        // cy.get('select').select('opel');
        // cy.get('[value="Bike"]').check();
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});