Feature: Send Feedback
  As a customer
  I can send my feedback via form

  Scenario: Submit Feedback Form
    Given I open feedback page
    When I fill feedback form
      | name    | email            | subject       | feedback         |
      | Diego   | diego@mail.com   | assunto       | muito bom!       |
      | Jessica | jessica@mail.com | outro assunto | muito bom mesmo! |
    Then I click on send button
    Then I see "/sendFeedback.html" in the url
    And I want to wait 1000 milliseconds
    And I reload the browser
