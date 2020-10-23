package com.e2eTest.automation.admin.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AdminPage {
	
	WebDriver driver;

	public AdminPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	final static String MODULE_ADMIN = "menu_admin_viewAdminModule";
	final static String BUTTON_ADD = "btnAdd";
	
	/* @FindBy */
	@FindBy(how = How.ID, using = MODULE_ADMIN)
	public static WebElement moduleAdmin;
	/* @FindBy */
	@FindBy(how = How.ID, using = BUTTON_ADD)
	public static WebElement buttonAdd;
	
	/* Methods */
	public void clicAdmin() {
		moduleAdmin.click();
	}

	public void clicAdd() {
		buttonAdd.clear();
	}


}
