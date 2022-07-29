Feature: Login to the application
  As a invalid user
  I cannot log into the application
  As a valid user
  I want to log in into the application

  Scenario: Invalid Login
    Given I open login page
    When I fill the username with "invalid username"
    And I fill the password with "invalid password"
    And I click on submit login
    Then I should see the error message

  Scenario: Valid Login
    Given I open login page
    When I fill the username with "username"
    And I fill the password with "password"
    And I click on submit login
    Then I should see the homepage
