///<reference types="Cypress" />

require('cypress-plugin-tab')

///para q reconozca comandos de cypress


describe("Segundo reto ",()=>{

    it(" ",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("http://computer-database.gatling.io/computers")
        cy.wait(1000)
        cy.title().should('eq',"Computers database")

        cy.get("#searchbox").type("ACE")
        cy.get("#searchsubmit").click()

        cy.get("#add").click()
        cy.wait(1000)
        cy.get("#name").should("be.visible").type("name1").tab().
        type("2021-01-10").tab().
        type("2022-01-10")

        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()
    })



})//fin de describe