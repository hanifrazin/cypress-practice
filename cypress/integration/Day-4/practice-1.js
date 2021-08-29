describe('test-desc',function(){
    // before dijalankan sebelum semua test case dijalankan
    // before(() => {
    //     cy.bukaUrl();
    // })
    
    // beforeEach dijalankan di semua test case
    beforeEach(() => {
        cy.bukaUrl();
        cy.wait(1000);
    })

    it('test-1',function(){
        cy.contains('Daftar').click();
        cy.go('back');
        cy.wait(1000);
        cy.go('forward');
        cy.wait(1000);
    })
})