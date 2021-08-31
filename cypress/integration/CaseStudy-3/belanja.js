describe('Test Shopping Barang',() => {
    before(() => {
        cy.loginStore();
    })

    it('TC-003 Beli Laptop',() => {
        cy.wait(5000);
        cy.contains("Sony vaio i5").scrollIntoView();
        cy.wait(5000);
        cy.get(':nth-child(8) > .card > .card-block > .card-title > .hrefch').click({force:true});
        cy.wait(1000);
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.wait(3000);
        cy.get('.col-lg-1 > .btn').contains("Place Order").click();
        cy.wait(1000);

        cy.get('#name').click({force:true}).type('Piero Oreip',{force:true}).should('have.value','Piero Oreip');
        cy.get('#country').click({force:true}).type('Italy',{force:true}).should('have.value','Italy');
        cy.get('#city').click({force:true}).type('Millan',{force:true}).should('have.value','Millan');
        cy.get('#card').click({force:true}).type('378282246310005',{force:true}).should('have.value','378282246310005');
        cy.get('#month').click({force:true}).type('Agustus',{force:true}).should('have.value','Agustus');
        cy.get('#year').click({force:true}).type('2021',{force:true}).should('have.value','2021');

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true});
        cy.wait(3000);
        cy.get('.confirm').click();
        // cy.get('.col-lg-3 > .list-group > a').contains('Laptops').click({force:true});
        // cy.get("#next2").click();
        // cy.wait(500);
    })
})