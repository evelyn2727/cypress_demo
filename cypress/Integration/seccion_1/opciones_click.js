///<reference types="Cypress" />
///para q reconozca comandos de cypress


describe("opciones click",()=>{

    it("click sencillo ",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
         cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
         cy.wait(1000)
         cy.get("#menu_admin_UserManagement").should("be.visible").click()
         cy.wait(1000)
         cy.get("#menu_admin_viewSystemUsers").should("be.visible").click()
              
    })
    it("click forzado ",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
         cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click({force:true})
         cy.wait(1000)
         cy.get("#menu_admin_UserManagement").should("be.visible").click({force:true})
         cy.wait(1000)
         cy.get("#menu_admin_viewSystemUsers").should("be.visible").click({force:true})
              
    })

    it.only("click por coordenadas x,y ",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click({force:true})
              
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click({force:true})
        cy.wait(1000)
        cy.get(".current > ul").should("be.visible").click(50,5)
       

        
    })


})//fin de describe