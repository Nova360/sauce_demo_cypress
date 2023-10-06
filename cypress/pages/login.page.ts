class Authentication {
  //page objects
  get userNameField() {
    return "#user-name";
  }
  get passwordFIeld() {
    return "#password";
  }

  get loginButton() {
    return "#login-button";
  }

  get loginBanner() {
    return "div.login_logo";
  }

  get burgerMenu() {
    return "div.bm-burger-button > button";
  }

  get logoutButton() {
    return "#logout_sidebar_link";
  }

  //methods
  login(username, password) {
    cy.get(this.userNameField).type(username);
    cy.get(this.passwordFIeld).type(password);
    cy.get(this.loginButton).click();
  }

  logout() {
    cy.get(this.burgerMenu).click();
    cy.get(this.logoutButton).should("exist");
    cy.get(this.logoutButton).click();
  }
}

export default new Authentication();
