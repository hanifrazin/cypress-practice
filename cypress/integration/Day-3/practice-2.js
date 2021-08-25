describe('test scenario day 3', function(){
    it('Isi nama dan email, lalu klik button email me!.',function(){
       cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
       cy.get('#et_pb_contact_name_0').type('hanif').should('have.value','hanif');
       cy.get('#et_pb_contact_email_0').type('hanif@mail.com').should('have.value','hanif@mail.com');
       cy.contains('Email Me!').click(); 
    }),
    it('Pilih jenis kelamin pada radio button',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[type="radio"]').first().check().should('have.value','male');
    }),
    it('Pilih satu atau semua pilihan pada checkboxes.',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[type="checkbox"]').check('Bike').should('have.value','Bike');
        cy.get('[type="checkbox"]').check('Car').should('have.value','Car');
    }),
    it('Pilih dropdown Audi',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('select').select('audi');
        cy.get('select').contains('Audi');
    }),
    it('Klik tombol Click Me pada bagian simple controls lalu cek apakah terdapat tulisan button success',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').should('have.text','Click Me').click();
        cy.get('.entry-title').contains('Button success');
        cy.get('.formkit-close').should('not.be.visible');
        cy.get('.formkit-close').click({force: true});
    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});