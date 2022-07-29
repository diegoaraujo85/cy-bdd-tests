import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage';

Given(/^I open feedback page$/, () => {
  FeedbackPage.visit();
});

When(/^I fill feedback form$/, (datatable) => {
  // usa a tabela para preencher os dados
  datatable.hashes().forEach((element) => {
    const { name, email, subject, feedback } = element;
    cy.log(name, email, subject, feedback)
    FeedbackPage.fillFeedbackForm(name, email, subject, feedback);
  });
})

Then(/^I click on send button$/, () => {
  FeedbackPage.submitForm();
});
