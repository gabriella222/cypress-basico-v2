Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(nome,sobrenome,email,textArea,telefone){
    
 
        //Nome
        cy.get('#firstName')
        .should('be.visible')
        .type(nome)
        .should('have.value',nome)

        //Sobrenome
        cy.get('#lastName')
            .should('be.visible')
            .type(sobrenome)
            .should('have.value',sobrenome)
        //Email
        cy.get('#email')
            .should('be.visible')
            .type(email)
            .should('have.value',email)
            
        //Como podemos ajudar?
        cy.get('#open-text-area')
            .should('be.visible')
            .type(textArea)
            .should('have.value',textArea)
        
        //cy.get('#phone').type(telefone)
        cy.contains('button','Enviar').click()



    
})


Cypress.Commands.add('clearMandantoryFields', function(nome,sobrenome,email,telefone){

         //Nome
         cy.get('#firstName')
         .should('be.visible')
         .type(nome)
         .should('have.value', nome)
         .clear().should('have.value','')
         

         //Sobrenome
         cy.get('#lastName')
             .should('be.visible')
             .type(sobrenome).should('have.value',sobrenome).clear().should('have.value','')
             
         //Email
         cy.get('#email')
             .should('be.visible')
             .type(email).should('have.value',email).clear().should('have.value','')
    

        cy.get('#phone')
            .should('be.visible')
            .type(telefone).should('have.value',telefone).clear().should('have.value','')



})


Cypress.Commands.add('phoneEmpty', function(nome,sobrenome,email,telefone){

     //Nome
     cy.get('#firstName')
     .should('be.visible')
     .type(nome)
     .should('have.value',nome)

     //Sobrenome
     cy.get('#lastName')
         .should('be.visible')
         .type(sobrenome)
         .should('have.value',sobrenome)
     //Email
     cy.get('#email')
         .should('be.visible')
         .type(email)
         .should('have.value',email)


     cy.get('input[type="checkbox"][value="phone"]').check()
     
     //cy.get('#phone').type(telefone)
     cy.contains('button','Enviar').click()

})