export class Navigation {
  selectors = {
    logo: "img[data-testid=logo-image]",
    heroButton: "#fly",
    scrollToTheTop: "#scroll-to-top > div",
  };

  mapNameToSelector(name) {
    const mapping = {
      Start: "li:nth-of-type(1) > .nav-link.transition",
      "About me": "li:nth-of-type(2) > .nav-link.transition",
      "What I do": "li:nth-of-type(3) > .nav-link.transition",
      Contact: "li:nth-of-type(4) > .nav-link.transition",
    };
    return mapping[name];
  }

  goToUrl(url) {
    cy.visit(url);
  }

  clickTab(tab) {
    const tabName = this.mapNameToSelector(tab);
    cy.get(tabName).click();
  }

  clickLogo() {
    cy.get(this.selectors.logo).click();
  }

  clickHeroButton() {
    cy.get(this.selectors.heroButton).click();
  }

  clickScrollToTheTop() {
    cy.get(this.selectors.scrollToTheTop).click();
  }

  checkIfTitleInclude(title) {
    cy.title().should("include", title);
  }

  checkIfPositionIsTop() {
    cy.window().its("scrollY").should("equal", 0);
  }

  checkIfPositionIsDifferentThanTop() {
    cy.window().its("scrollY").should("not.equal", 0);
  }

  checkIfPositionIsCloseTo(position) {
    cy.window().then(($window) => {
      expect($window.scrollY).to.be.closeTo(parseInt(position), 20);
    });
  }
}
