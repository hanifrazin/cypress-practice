describe('Test Student Registration Form',() => {
    it('TC001 Input Form Registrasi',() => {
        // Kunjungi alamat
        cy.visit('https://demoqa.com/automation-practice-form');

        // Input Firstname
        cy.get('#firstName').type('Hanif');

        // Input Last Name
        cy.get('#lastName').type('Razin');

        // Input Email
        cy.get('#userEmail').type('hanif@nds.co.id');

        // Pilih Gender Male
        cy.get('[type="radio"]').first().check({force: true});
        // cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        
        // Input mobile number
        cy.get('#userNumber').type('08764233143');

        // Ceklis hobbie
        cy.get('#hobbies-checkbox-1').check({force: true});
        cy.get('#hobbies-checkbox-2').check({force: true});

        // Isi alamat
        cy.get('#currentAddress').type('Tangerang Selatan');

        // Click button
        cy.get('#submit').click();
    })
})