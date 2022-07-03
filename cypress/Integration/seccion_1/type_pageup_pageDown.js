///<reference types="Cypress" />
///para q reconozca comandos de cypress
describe("Ejemplo pageUp,pageDown",()=>{

    it("Type pageUp",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("qe","ToolsQA")
        cy.wait(1500)
       cy.get("#userName").type('{pageup}')
       cy.wait(2200)
    })
    it("Type pageDown",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("qe","ToolsQA")
        cy.wait(1500)
       cy.get("#userName").type('{pagedown}')
       cy.wait(2200)
    })

    it.only("Type only",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("qe","ToolsQA")
        cy.wait(1500)
       cy.get("#userName").type('{pagedown}')
       cy.wait(2200)
    })
})//fin de describe