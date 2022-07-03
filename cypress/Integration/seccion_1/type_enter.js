///<reference types="Cypress" />
///para q reconozca comandos de cypress


describe("Funciones para Type ",()=>{

    it("Type-->Enter",()=>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google")
        cy.wait(1500)

   // cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
   // .type("cypress io")

       cy.get("[name='q']").type("cypress io {enter}")
    cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    cy.wait(1500)
    })



})//fin de describe