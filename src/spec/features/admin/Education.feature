@education
Feature: Title of your feature
  En tant que utilisateur je souhaite modifier le premier niveau dans la liste

  Background: 
    Given J ouvre l application OrangeHRM
    When Je saisie le nom d utilisateur "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    Then Redirection vers la page Home

  @edc
  Scenario: Modifier le premier niveau dans liste
    When Je clique sur le module Admin
    And J affiche le sous menu Qualifications
    And Je clique sur Education
    And Je coche le premier level
    And 
    Then I validate the outcomes
    And check more outcomes
