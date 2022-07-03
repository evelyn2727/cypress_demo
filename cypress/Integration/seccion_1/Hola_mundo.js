///<reference types="Cypress" />
///para q reconozca comandos de cypress

describe("Bienvenidos al curso de cypress sección 1 ",()=>{

    it("mi primer test->Hola mundo",()=>{
        cy.log("gfgfgfgnpx ");
        cy.wait(3000);
    })


    it("mi segundo test->Hola mundo",()=>{
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Evelyn");
        cy.wait(4000);
    })

})//fin de describe