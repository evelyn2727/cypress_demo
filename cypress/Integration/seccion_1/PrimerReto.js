///<reference types="Cypress" />
///para q reconozca comandos de cypress
require('cypress-plugin-tab')
 
describe("primer reto ",()=>{

    it("Login ",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("https://demoqa.com/webtables")
        
        cy.title().should('eq',"ToolsQA")
      //  cy.get("#searchBox").should("be.visible").type("Cierra")
       // cy.get("#searchBox").should("be.visible").clear()

//agregando boton
cy.get("#addNewRecordButton").should("be.visible").click()
cy.get("#firstName").should("be.visible").type("Evelyn").tab().
type("Lizarraga").tab().
type("elizarraga@gmail.com").tab().type("31").tab().type("1200").tab().type("Piura")
 //cy.get("#age").should("be.visible").type("31")
//cy.get("#salary").should("be.visible").type("1200")
//cy.get("#department").should("be.visible").type("Piura")
cy.get("#submit").should("be.visible").click()
cy.wait(1000)
  
//editar un campo

cy.get("#edit-record-1").should("be.visible").click()
cy.wait(1000)
cy.get("#age").should("be.visible").clear().type("32")
cy.get("#submit").should("be.visible").click()
cy.wait(2000)

//eliminar 
//cy.get("#delete-record-4").should("be.enabled").click()



    })



})//fin de describe