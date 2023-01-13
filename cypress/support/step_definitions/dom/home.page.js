/* global cy */

const Page = {
  positionIsTop: () => {
    cy.window().its("scrollY").should("equal", 0);
  },
  positionIsCloseTo: (position) => {
    cy.window().then(($window) => {
      expect($window.scrollY).to.be.closeTo(parseInt(position), 50);
    });
  },
};

const Navigation = {
  get: (name) => {
    return cy.contains(name);
  },
  click: (name) => {
    Navigation.get(name).click();
  },
  linkIncludeName: (name, value) => {
    Navigation.get(name).should("include", value);
  },
};

const Buttons = {
  HeroButton: {
    selector: ".hero-button > :nth-child(1)",
    click: () => {
      cy.get(Buttons.HeroButton.selector).click({ force: true });
    },
  },
  ScrollToTheTop: {
    selector: "#scroll-to-top > div",
    click: () => {
      cy.get(Buttons.ScrollToTheTop.selector).click();
    },
  },
};

const Images = {
  get: (name) => {
    return cy.get(`[data-testid=${name}] > div > [data-testid="page-image"]`);
  },
  clickOn: (name) => {
    Images.get(name).click();
  },
  include: (name, code) => {
    Images.get(name).should("have.attr", "src").and("include", code);
  },
};

const HomePage = {
  Page,
  Navigation,
  Buttons,
  Images,
};

export default HomePage;
