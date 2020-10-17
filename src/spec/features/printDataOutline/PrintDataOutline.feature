@print-data
Feature: Print Data - Text Box
  As a user I want to print my data

  @print
  Scenario Outline: Print Data - Text Box
    Given I open application text box
    When I want to print full name "<fullName>"
    And I want to print email "<email>"

    Examples: 
      | fullName | email            |
      | Achref   | Achref@gmail.com |
      | Jihen    | Jihen@gmail.com  |
