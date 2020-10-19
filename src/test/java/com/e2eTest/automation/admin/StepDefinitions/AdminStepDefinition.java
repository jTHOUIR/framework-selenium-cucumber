package com.e2eTest.automation.admin.StepDefinitions;

import org.openqa.selenium.WebDriver;

import com.e2eTest.automation.admin.pageObjects.AdminPage;
import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.util.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdminStepDefinition extends CommonMethods{
	
	public WebDriver driver;
	private AdminPage adminPage = new AdminPage(driver);
	private CommonMethods commonMethods = new CommonMethods();
	
	@When("^je clique sur le module Admin$")
	public void jeCliqueSurLeModuleAdmin() throws Throwable {
	}

	@When("^je clique sur le bouton Add$")
	public void jeCliqueSurLeBoutonAdd() throws Throwable {
	}

	@When("^je saisie nom employee \"([^\"]*)\"$")
	public void jeSaisieNomEmployee(String arg1) throws Throwable {
	}

	@When("^je saisie le mot de passe \"([^\"]*)\"$")
	public void jeSaisieLeMotDePasse(String arg1) throws Throwable {
	}

	@When("^je saisie confirme mot de passe \"([^\"]*)\"$")
	public void jeSaisieConfirmeMotDePasse(String arg1) throws Throwable {
	}

	@When("^je clique sur le bouton Save$")
	public void jeCliqueSurLeBoutonSave() throws Throwable {
	}

	@Then("^je verifie le nom Admin ajouté$")
	public void jeVerifieLeNomAdminAjouté() throws Throwable {
	}


}
