## Overview

This is my personal website, blog and part of my portfolio. Written using JavaScript, built with React, tested by Cypress automation, by run it on GitHub Actions

## Run Website Locally

```bash
# install necessary packages
yarn

# run the project
yarn start
```

Open http://localhost:3000 with your browser to see the result

## Run Cypress tests Locally

```bash
# install necessary packages
yarn

# run cypress modal window
yarn cy:open

# or run cypress tests in terminal
yarn cy:run
```

## Example of Cypress modal window with Cucumber Feature files

# BDD(Cucumber) tests

Under path: `/cypress/e2e` are stored all automation tests written in BDD format

## Example

```gherkin
Feature: Navigation links are visible and performing actions

  Background:
    Given I open the "home_page"
    And The title includes "About automation tests in Software Development"

  @regression
  Scenario Outline: Navigation item "<navigation_item>" scrolled to its assigned section
    * I click on the navigation link "<navigation_item>"
    Then The page is on the position "<position>"

    Examples:
      | navigation_item | position |
      | What I Do       | 10       |
      | About me        | 18       |
      | Cooperation     | 11       |
      | Contact         | 16       |
```
