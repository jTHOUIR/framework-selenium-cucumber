@tag
Feature: Authentification - Param - OrangeHRM
  En tant que utilisateur je souhaite m authentifier

  Background: 
    Given J ouvre l application OrangeHRM
    When Je saisie le nom d utilisateur "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    Then Redirection vers la page Home

  @buzz
  Scenario: Clic - Buzz
    When Je clique sur le module Buzz

  @temps
  Scenario: clic - Time
    When Je clique sur le module Time
