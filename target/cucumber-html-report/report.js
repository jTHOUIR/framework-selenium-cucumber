$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admin/Admin.feature");
formatter.feature({
  "line": 2,
  "name": "Admin - OrangeHRM",
  "description": "En tant que utilisateur je souhaite verifier le module Admin",
  "id": "admin---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Creation Admin - OrangeHRM",
  "description": "",
  "id": "admin---orangehrm;creation-admin---orangehrm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@adm"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le bouton Add",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "je saisie nom employee \"\u003cnomEmpl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "je saisie le mot de passe \"\u003cmdp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "je saisie confirme mot de passe \"\u003cconfmdp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "je clique sur le bouton Save",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie le nom Admin ajouté",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "admin---orangehrm;creation-admin---orangehrm;",
  "rows": [
    {
      "cells": [
        "nomEmpl",
        "mdp",
        "confMdp"
      ],
      "line": 23,
      "id": "admin---orangehrm;creation-admin---orangehrm;;1"
    },
    {
      "cells": [
        "Achref",
        "achrefachref",
        "achrefachref"
      ],
      "line": 24,
      "id": "admin---orangehrm;creation-admin---orangehrm;;2"
    },
    {
      "cells": [
        "Jihen",
        "jihenjihen",
        "jihenjihen"
      ],
      "line": 25,
      "id": "admin---orangehrm;creation-admin---orangehrm;;3"
    },
    {
      "cells": [
        "Zied",
        "ZiedZied",
        "ZiedZied"
      ],
      "line": 26,
      "id": "admin---orangehrm;creation-admin---orangehrm;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8775420700,
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
  "duration": 2873274900,
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
  "duration": 89829400,
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
  "duration": 71353700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2771812400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 33572300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Creation Admin - OrangeHRM",
  "description": "",
  "id": "admin---orangehrm;creation-admin---orangehrm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    },
    {
      "line": 12,
      "name": "@adm"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le bouton Add",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "je saisie nom employee \"Achref\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "je saisie le mot de passe \"achrefachref\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "je saisie confirme mot de passe \"\u003cconfmdp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "je clique sur le bouton Save",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie le nom Admin ajouté",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1444008200,
  "status": "passed"
});
formatter.before({
  "duration": 8247371000,
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
  "duration": 2711209400,
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
  "duration": 86518900,
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
  "duration": 71590100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2915187200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 33384900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Creation Admin - OrangeHRM",
  "description": "",
  "id": "admin---orangehrm;creation-admin---orangehrm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    },
    {
      "line": 12,
      "name": "@adm"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le bouton Add",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "je saisie nom employee \"Jihen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "je saisie le mot de passe \"jihenjihen\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "je saisie confirme mot de passe \"\u003cconfmdp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "je clique sur le bouton Save",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie le nom Admin ajouté",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1296855400,
  "status": "passed"
});
formatter.before({
  "duration": 8245323200,
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
  "duration": 2608127700,
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
  "duration": 86914300,
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
  "duration": 71997500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2896333200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 30170400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Creation Admin - OrangeHRM",
  "description": "",
  "id": "admin---orangehrm;creation-admin---orangehrm;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@admin"
    },
    {
      "line": 12,
      "name": "@adm"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Admin",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je clique sur le bouton Add",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "je saisie nom employee \"Zied\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "je saisie le mot de passe \"ZiedZied\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "je saisie confirme mot de passe \"\u003cconfmdp\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "je clique sur le bouton Save",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie le nom Admin ajouté",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1264740900,
  "status": "passed"
});
});