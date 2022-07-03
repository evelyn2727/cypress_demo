///<reference types="Cypress" />
///para q reconozca comandos de cypress
require('cypress-plugin-tab')

describe("Funcion type tab",()=>{
    it("Type tab",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
         
        cy.title().should('eq','ToolsQA')
         
       

        cy.get("#firstName").type("evelyn").tab().
        type("lizarraga").tab().
        type("evelyn@gmail.com")

    })


})//fin de describe