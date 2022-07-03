///<reference types="Cypress" />
///para q reconozca comandos de cypress


describe("selector",()=>{

    it("contains",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(2000)
        cy.get(".custom-control-label").contains("Female").click()
    })



})//fin de describe