import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "./dom/home.page";

Given("I click on image {string}", (name) => {
  HomePage.Images.clickOn(name);
});

Then("Image {string} is visible on the page with {string}", (image, code) => {
  HomePage.Images.include(image, code);
});
