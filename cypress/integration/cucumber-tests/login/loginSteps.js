import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage';

Given(/^I open login page$/, () => {
  LoginPage.visit();
});

// usando regex
// When(/^I fill the username with "([^"]*)"$/, (username) => {
//   LoginPage.fillUsername('username');
// });

When('I fill the username with {string}', (username) => {
  LoginPage.fillUsername(username);
});

And(/^I fill the password with "([^"]*)"$/, (password) => {
  LoginPage.fillPassword(password);
});

And(/^I click on submit login$/, () => {
  LoginPage.submitForm();
});

Then(/^I should see the homepage$/, () => {
  cy.get('#account_summary_tab').should('be.visible');
});
