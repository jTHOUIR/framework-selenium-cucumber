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
	final static String MENU_BUZZ = "menu_buzz_viewBuzz";
	final static String MENU_TIME = "menu_time_viewTimeModule";

	/* @FindBy */
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	/* @FindBy */
	@FindBy(how = How.ID, using = USER_PASSWORD_ID)
	public static WebElement userPassword;
	/* @FindBy */
	@FindBy(how = How.ID, using = MENU_BUZZ)
	public static WebElement menuBuzz;
	/* @FindBy */
	@FindBy(how = How.ID, using = MENU_TIME)
	public static WebElement menuTime;

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
		menuBuzz.click();
		
	}
	/* Methods */
	public void clickTime() {
		menuTime.click();
		
	}

}
