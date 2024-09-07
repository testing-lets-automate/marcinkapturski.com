import { Then } from "@badeball/cypress-cucumber-preprocessor";

import { StartPage } from "../pages/StartPage";

const startPage = new StartPage();

Then("{string} is visible the with content {string}", (imageName, code) => {
  startPage.checkIfImageIsVisible(imageName, code);
});
