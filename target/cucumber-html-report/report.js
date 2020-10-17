$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentificationParam/AuthentificationParam.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - Param - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---param---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 8856875900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---param---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@auth"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2854550900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1367228100,
  "status": "passed"
});
formatter.before({
  "duration": 8283942800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Clic - Buzz",
  "description": "",
  "id": "authentification---param---orangehrm;clic---buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Je clique sur le module Buzz",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2907084400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1253023100,
  "status": "passed"
});
formatter.before({
  "duration": 7723561600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "clic - Time",
  "description": "",
  "id": "authentification---param---orangehrm;clic---time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@temps"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Je clique sur le module Time",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2395420400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1258144000,
  "status": "passed"
});
});