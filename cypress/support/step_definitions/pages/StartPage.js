export class StartPage {
  selectors = {
    logo: "img[data-testid=logo-image]",
    heroButton: "#fly",
    scrollToTheTop: "#scroll-to-top > div",
  };

  checkIfImageIsVisible(imageName, code) {
    cy.get(`[data-testid=${imageName}]`)
      .should("have.attr", "src")
      .and("include", code);
  }
}
