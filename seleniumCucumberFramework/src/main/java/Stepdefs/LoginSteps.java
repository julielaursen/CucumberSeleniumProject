package Stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

  //Given the user is on the login page
  @Given("the user is on the login page")
  public void user_on_login(){
	  System.out.println("Step1: User is on the login page");
  }
  
  @When("the user enters valid credentials")
  public void user_enters_valid_credentials(){
	  System.out.println("Step2: User enters valid credentials");
  }
  
  @Then("the user should be able to login")
  public void user_logs_in(){
	  System.out.println("Step3: User sees home page");
   }
  
public class UIValidation {
	
	@Given("the user is on the home page")
	public void user_on_login(){
		System.out.println("Step1: User is on the home page");
	  }
	@Then("the user should see the logo")
	public void validate_logo(){
		System.out.println("Step2: User sees the logo");
	}
	}
  }