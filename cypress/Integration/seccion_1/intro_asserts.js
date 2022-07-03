///<reference types="Cypress" />
///para q reconozca comandos de cypress


describe("Intro asserts",()=>{

    it("Demo delos asserts",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
         
        cy.title().should('eq','ToolsQA')
        cy.wait(5000)

        cy.get("#firstName").should("be.visible").type("juan")
       cy.wait(5000)
        cy.get("#lastName").should("be.visible").type("perez")
        cy.wait(2000)
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("evelyn@gmail.com")

    })



})//fin de describe