const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const FEEDBACK_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]';

class FeedbackPage {
  static visit() {
    cy.visit(URL);
  }

  static fillFeedbackForm(name, email, subject, feedback) {
    cy.get(NAME_INPUT).clear().type(name);
    cy.get(EMAIL_INPUT).clear().type(email);
    cy.get(SUBJECT_INPUT).clear().type(subject);
    cy.get(FEEDBACK_INPUT).clear().type(feedback);
  }

  // static fillName(name) {
  //   cy.get(NAME_INPUT).type(name);
  // }
  // static fillEmail(email) {
  //   cy.get(EMAIL_INPUT).type(email);
  // }
  // static fillSubject(subject) {
  //   cy.get(SUBJECT_INPUT).type(subject);
  // }
  // static fillFeedback(feeedback) {
  //   cy.get(FEEDBACK_INPUT).type(feeedback);
  // }

  static submitForm() {
    cy.get(SUBMIT_BUTTON).click();
  }
}

export default FeedbackPage;
