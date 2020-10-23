package com.e2eTest.automation.authentificationParam.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AuthentificationParamPage {

	WebDriver driver;

	public AuthentificationParamPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	final static String USER_NAME_ID = "txtUsername";
	final static String USER_PASSWORD_ID = "txtPassword";
	final static String MODULE_BUZZ = "menu_buzz_viewBuzz";
	final static String MODULE_TIME = "menu_time_viewTimeModule";

	/* @FindBy */
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	/* @FindBy */
	@FindBy(how = How.ID, using = USER_PASSWORD_ID)
	public static WebElement userPassword;
	/* @FindBy */
	@FindBy(how = How.ID, using = MODULE_BUZZ)
	public static WebElement moduleBuzz;
	/* @FindBy */
	@FindBy(how = How.ID, using = MODULE_TIME)
	public static WebElement moduleTime;

	/* Methods */
	public void sendUserNameParam(String name) {
		userName.sendKeys(name);
	}

	/* Methods */
	public void sendUserPasswordParam(String psw) {
		userPassword.sendKeys(psw);
	}

	/* Methods */
	public void clickBuzz() {
		moduleBuzz.click();
		
	}
	/* Methods */
	public void clickTime() {
		moduleTime.click();
		
	}

}
