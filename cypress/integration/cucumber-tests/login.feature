Feature: Login to the application
  As a invalid user
  I cannot log into the application
  As a valid user
  I want to log in into the application

  Scenario: Invalid Login
    Given I open login page
    And I want to wait 2000 milliseconds
    And I see "Zero - Log in" in the title
    And I see "/login" in the url
    When I fill the username with "invalid username"
    And I fill the password with "invalid password"
    And I click on submit login
    Then I should see the error message

  Scenario: Valid Login
    Given I open login page
    When I fill the username with "username"
    And I fill the password with "password"
    And I click on submit login
    And I reload the browser
    Then I should see the homepage
