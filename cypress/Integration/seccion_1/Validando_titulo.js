///<reference types="Cypress" />
///para q reconozca comandos de cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('list not defined')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })
describe(" ",()=>{

    it(" ",()=>{
        cy.visit("https://demoqa.com/text-box")

        cy.title().should("qe","ToolsQA")
       cy.log("ok la funcionó title")
    })



})//fin de describe