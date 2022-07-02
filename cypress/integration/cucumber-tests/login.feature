Feature: Login to the application
  As a valid user
  I want to log in to the application

  Scenario: Valid Login
    Given I open login page
    When I submit login
    Then I should see the homepage
