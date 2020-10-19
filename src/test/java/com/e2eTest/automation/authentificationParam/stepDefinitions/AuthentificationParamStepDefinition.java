package com.e2eTest.automation.authentificationParam.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.authentificationParam.pageObjects.AuthentificationParamPage;
import com.e2eTest.automation.util.CommonMethods;
import com.e2eTest.automation.util.Setup;

import cucumber.api.java.en.When;

public class AuthentificationParamStepDefinition extends CommonMethods{
	
	public WebDriver driver;
	private AuthentificationParamPage authentificationParamPage = new AuthentificationParamPage(driver);	
	public AuthentificationParamStepDefinition() {
		driver = Setup.driver;
	}

	@When("^Je saisie le nom d utilisateur \"([^\"]*)\"$")
	public void jeSaisieLeNomDUtilisateur(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationParamPage.class);
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationParamPage.sendUserNameParam(name);
		logger.info("saisir le nom d'utilisateur");
	}

	@When("^Je saisie le mot de passe \"([^\"]*)\"$")
	public void jeSaisieLeMotDePasse(String passWord) throws Throwable {
		authentificationParamPage.sendUserPasswordParam(passWord);
		logger.info("saisir le mot de passe");
	}

	@When("^Je clique sur le module Buzz$")
	public void jeCliqueSurLeModuleBuzz() throws Throwable {
		authentificationParamPage.clickBuzz();
		logger.info("Clic sur Buzz");
	}

	@When("^Je clique sur le module Time$")
	public void jeCliqueSurLeModuleTime() throws Throwable {
		authentificationParamPage.clickTime();
		logger.info("Clic sur Time");
	}


}
