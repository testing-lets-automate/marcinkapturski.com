import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "./dom/home.page";

When("I click on the navigation link {string}", (navigation_link) => {
  HomePage.Navigation.click(navigation_link);
});

When("I click the ScrollToTheTop button", () => {
  HomePage.Buttons.ScrollToTheTop.click();
});

When("I click on Hero button", () => {
  HomePage.Buttons.HeroButton.click();
});

When("The page is on the position {string}", (position) => {
  HomePage.Page.positionIsCloseTo(position);
});

Then("The page position is the top", () => {
  HomePage.Page.positionIsTop();
});
