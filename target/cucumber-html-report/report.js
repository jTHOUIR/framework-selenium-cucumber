$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 10281237800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
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
  "name": "Je saisie userName",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie mot de passe",
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
  "duration": 3122589700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieUserName()"
});
formatter.result({
  "duration": 93665600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieMotDePasse()"
});
formatter.result({
  "duration": 93804800,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2965560700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 55166000,
  "status": "passed"
});
formatter.after({
  "duration": 1431289900,
  "status": "passed"
});
formatter.uri("authentificationParam/AuthentificationParam.feature");
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
  "duration": 8438647300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2579989800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 98399700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 86868700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2729505900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 50364700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Clic - Buzz",
  "description": "",
  "id": "authentification---param---orangehrm;clic---buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le module Buzz",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleBuzz()"
});
formatter.result({
  "duration": 3991821100,
  "status": "passed"
});
formatter.after({
  "duration": 1373795800,
  "status": "passed"
});
formatter.before({
  "duration": 8564872800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2683622800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 168257600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 153095200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3042201100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 48648900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "clic - Time",
  "description": "",
  "id": "authentification---param---orangehrm;clic---time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@temps"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Je clique sur le module Time",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleTime()"
});
formatter.result({
  "duration": 989630700,
  "status": "passed"
});
formatter.after({
  "duration": 1363993800,
  "status": "passed"
});
});