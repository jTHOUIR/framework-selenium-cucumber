@admin
Feature: Admin - OrangeHRM
  En tant que utilisateur je souhaite verifier le module Admin

  Background: 
    Given J ouvre l application OrangeHRM
    When Je saisie le nom d utilisateur "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    Then Redirection vers la page Home

  @adm
  Scenario Outline: Creation Admin - OrangeHRM
    When je clique sur le module Admin
    When je clique sur le bouton Add
    When je saisie nom employee "<nomEmpl>"
    When je saisie le mot de passe "<mdp>"
    When je saisie confirme mot de passe "<confmdp>"
    When je clique sur le bouton Save
    Then je verifie le nom Admin ajouté

    Examples: 
      | nomEmpl | mdp          | confMdp      |
      | Achref  | achrefachref | achrefachref |
      | Jihen   | jihenjihen   | jihenjihen   |
      | Zied    | ZiedZied     | ZiedZied     |
