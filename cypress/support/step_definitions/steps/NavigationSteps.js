import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Navigation } from "../components/Navigation";

const navigation = new Navigation();

Given("I open the start page", () => {
  navigation.goToUrl(Cypress.config("baseUrl"));
});

Given("the title includes {string}", (title) => {
  navigation.checkIfTitleInclude(title);
});

Given("I click on the navigation link {string}", (navigationLink) => {
  navigation.clickTab(navigationLink);
});

Given("I click the ScrollToTheTop button", () => {
  navigation.clickScrollToTheTop();
});

Given("I click on logo", () => {
  navigation.clickLogo();
});

Given("I click on Hero button", () => {
  navigation.clickHeroButton();
});

Then("the page is on the position {string}", (position) => {
  navigation.checkIfPositionIsCloseTo(position);
});

Then("the page position is the top", () => {
  navigation.checkIfPositionIsTop();
});

Then("the page position is not the top", () => {
  navigation.checkIfPositionIsDifferentThanTop();
});
