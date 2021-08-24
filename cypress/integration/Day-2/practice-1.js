describe('kumpulan test case', function(){
    it('tc-001',function(){
        // cy.visit('https://www.bukalapak.com/');
        // cy.get('.bl-link > .pr-4').click();
        // cy.get('.bl-text-field__inner').type('hanif');
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('opel');
        cy.get('[value="Bike"]').check();
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});