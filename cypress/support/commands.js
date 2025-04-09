Cypress.Commands.add('login', (url, email, password) => {
    console.log("Login Params:  ", {url, email, password});
    cy.visit(url);
    cy.get('#user-name').type(email);
    cy.get('#password').type(password);   
    cy.get('#login-button').click(); 
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/')
})