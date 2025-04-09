# SauceDemoCypress

This project contains automated end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) website using [Cypress](https://www.cypress.io/). The tests cover various login scenarios and ensure the functionality of the application.

## Project Structure

- **`cypress/fixtures/`**: Contains test data in JSON format.
  - `example.json`: Example fixture data.
  - `credentials.json`: User credentials for testing different login scenarios.
- **`cypress/e2e/`**: Contains the test cases.
  - `1-SauceDemo/sauceDemo.cy.js`: Test suite for SauceDemo login functionality.
- **`cypress/support/`**: Contains custom commands and global configurations.
  - `commands.js`: Custom Cypress commands for login and logout.
  - `e2e.js`: Global configuration and behavior for Cypress tests.
- **`cypress.config.js`**: Cypress configuration file.
- **`package.json`**: Project dependencies and scripts.
- **`.gitignore`**: Specifies files and folders to ignore in version control.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A browser (e.g., Chrome, Edge)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd saucedemo_test

2. Install dependencies:
    npm install

3. Scripts

Open Cypress Test Runner
    npm run cy:open

Run Tests in Headless Mode:
    npm run cy:test

Run Tests in Edge Browser:
    npm run cy:run:edge

4. Tests

The test suite includes the following scenarios:

Login Successful and Verify Items:

Logs in with valid credentials and verifies that 6 items are displayed.
Login with Invalid Username:

Attempts to log in with an invalid username and verifies the error message.
Login with Invalid Password:

Attempts to log in with an invalid password and verifies the error message.
Login with Empty Fields:

Attempts to log in with empty username and password fields and verifies the error message.

5. Custom Commands
The following custom commands are defined in cypress/support/commands.js:

cy.login(url, email, password): Automates the login process.
cy.logout(): Automates the logout process.

6. Reports
Test results are generated using the Mochawesome reporter. Reports can be found in the cypress/reports/ directory after running the tests.

7. Screenshots
Screenshots of failed tests are saved in the cypress/screenshots/ directory.