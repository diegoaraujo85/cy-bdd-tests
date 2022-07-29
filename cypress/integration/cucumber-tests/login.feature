Feature: Login to the application
  As a valid user
  I want to log in to the application

  Scenario: Valid Login
    Given I open login page
    # When I submit login
    When I fill the username with "username"
    And I fill the password with "password"
    And I click on submit login
    Then I should see the homepage
