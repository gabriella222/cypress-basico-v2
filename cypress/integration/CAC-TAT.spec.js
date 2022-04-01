// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//<reference types = "Cypress"/>
    

describe('Central de Atendimento ao cliente TAT', function(){

    const textoLongo = "Muito bom mesmo gostei muito parabens uma maravilha muito bem, muito likes!Muito bom mesmo gostei muito parabens uma maravilha muito bem, muito likes!"


        beforeEach(function(){

            cy.visit("./src/index.html");


         })

        it('verifica o titulo da aplicação', function(){

           cy.title().should('be.equal',"Central de Atendimento ao Cliente TAT");

        }),

        it('preenche os campos obrigatórios e envia o formulário', function(){

            cy.fillMandatoryFieldsAndSubmit('Gabriella','Oliveira','gabriellaszaolv50@gmail.com','Teste')
            //Mensagem
            cy.get('.success > strong').should('be.visible')
                
        
        })

        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

            
            cy.fillMandatoryFieldsAndSubmit('Gabriella','Oliveira','gabriellaszaolvgmail.com','Teste')

            cy.get('.error').should('be.visible')


        })
        it("Validar textos no campo de telefone", function(){

            cy.get('#phone')
                .type('teste')
                .should('have.value','')
        })

        it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function(){

            cy.phoneEmpty('Gabriella','Oliveira','gabriellaszaolv50@gmail.com','Teste')

            //Mensagem
            cy.get('.error').should('be.visible')


        })

        it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){

            cy.clearMandantoryFields('Gabriella','Oliveira','gabriellaszaolv50@gmail.com','40028292')

                     

        })
        it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){

            cy.contains('button','Enviar')
                .should('be.visible')
                .click()
                

            cy.get('.error').should('be.visible')

            
        })
        it('envia o formuário com sucesso usando um comando customizado', function(){

            cy.fillMandatoryFieldsAndSubmit('Gabriella','Oliveira','gabriellaszaolv50@gmail.com','Teste')

            cy.get('.success > strong').should('be.visible')

        })

        it('seleciona um produto (YouTube) por seu texto', function(){

            cy.get('#product').select('YouTube')
                .should('be.visible')
                .should('have.value','youtube') 
        })

        it('seleciona um produto (Mentoria) por seu valor (value)', function(){

            cy.get('#product').select('mentoria')
                .should('be.visible')
                .should('have.value','mentoria')


        })
        it('seleciona um produto (Blog) por seu índice', function(){

            cy.get('#product').select(1)
                .should('be.visible')
                .should('have.value','blog')

        })
        it('marca o tipo de atendimento "Feedback"', function(){

            cy.get('input[type="radio"][value="feedback"]').check('feedback')
            .should('have.value','feedback')

        })

        it('marca cada tipo de atendimento', function(){

            cy.get('input[type="radio"]')
                .should('have.length',3)
                .each(function($radio){
                    cy.wrap($radio).check()
                        .should('be.checked')
                })

        })

        it('marca ambos checkboxes, depois desmarca o último', function(){

            cy.get('input[type="checkbox"]')
                .check()
                .should('be.checked')
                .last()
                .uncheck()
                .should('not.be.checked')

        })
        it('seleciona um arquivo da pasta fixtures', function(){

            cy.get('#file-upload')
                .should('not.be.value')
                .selectFile('cypress/fixtures/example.json')
                .should(function($input){

                    expect($input[0].files[0].name).to.equal('example.json')
                })
        })

        it('seleciona um arquivo simulando um drag-and-drop',function(){
            
            cy.get('#file-upload')
                .should('not.be.value')
                .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
                .should(function($input){

                    expect($input[0].files[0].name).to.equal('example.json')
                })

        })
        it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){

            cy.fixture("example.json").as('sampleFile')
            cy.get('#file-upload')
            .should('not.be.value')
            .selectFile('@sampleFile')
            .should(function($input){

                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',function(){

        cy.get('a').should('have.attr','target','_blank')



        
    })
    it('acessa a página da política de privacidade removendo o target e então clicanco no link', function(){

        cy.get('#privacy a')
            .invoke('removeAttr','target')
            .click()
        cy.contains('Talking About Testing').should('be.visible')


    })

   
})

       

