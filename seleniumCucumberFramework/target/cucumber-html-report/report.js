$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "The Login Page",
  "description": "As a returning customer\r\nI want to log into the application\r\nSo that I can view my account",
  "id": "the-login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "the user should be able to log in",
  "description": "",
  "id": "the-login-page;the-user-should-be-able-to-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user enters valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_on_login()"
});
formatter.result({
  "duration": 154437969,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 84390,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_logs_in()"
});
formatter.result({
  "duration": 245569,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate the logo",
  "description": "",
  "id": "the-login-page;validate-the-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Logo"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user should see the logo",
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
});