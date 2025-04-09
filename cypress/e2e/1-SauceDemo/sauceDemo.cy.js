import credentials from "../../fixtures/credentials.json"

describe("Test SauceDemo", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it("Login Successful and have 6 items", () => {
        const url = "https://www.saucedemo.com/"
        const email = credentials[0].standard_user
        const password = credentials[0].standard_pass

        cy.login(url, email, password)
        
        cy.get('.inventory_item').should('have.length', 6)
    })

    it("Login with wrong username", () => {
        const url = "https://www.saucedemo.com/"
        const email = credentials[1].invalid_user
        const password = credentials[1].invalid_pass

        cy.login(url, email, password)
        cy.get('[data-test="error"]').should('be.visible')
            .and('have.text', 'Epic sadface: Username and password do not match any user in this service')

        cy.screenshot('Login with wrong username')
    })

    it("Login with wrong password", () => {
        const url = "https://www.saucedemo.com/"
        const email = credentials[2].wrong_user_pass
        const password = credentials[2].wrong_pass

        cy.login(url, email, password)
        cy.get('[data-test="error"]').should('be.visible')
            .and('have.text', 'Epic sadface: Username and password do not match any user in this service')

        cy.screenshot('Login with wrong password')
    })

    it("Login with empty fields", () => {
        const url = "https://www.saucedemo.com/"

        cy.visit(url);
        cy.get('#login-button').click();
        cy.get('.error-message-container').should('be.visible')
            .and('have.text', 'Epic sadface: Username is required')

        cy.screenshot('Login with empty fields')
    })
})