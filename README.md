<img width="1002" alt="marcinkapturski.com" src="https://user-images.githubusercontent.com/41780000/216717242-f88147a2-2110-4afb-b7d9-17ae6f58bae3.png">
<p align="center">
  <a target="_blank" href="https://marcinkapturski.com">
    <img src="https://img.shields.io/badge/Website_ marcinkapturski.com-link_here-blue?style=for-the-badge&logo=React" alt="Website marcinkapturski.com" style="vertical-align:top; margin:10px">
  </a>  
</p>

## Overview

<p align="center">   
    <img src="https://img.shields.io/badge/React-_-blue?logo=React" alt="React" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/Cypress-_-blue?logo=Cypress" alt="Cypress" style="vertical-align:top; margin:4px">    
    <img src="https://img.shields.io/badge/DatoCMS-_-blue?logo=DatoCMS" alt="DatoCMS" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/GitHubActions-_-blue?logo=GitHubActions" alt="GitHub Actions" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/JavaScript-_-blue?logo=JavaScript" alt="JavaScript" style="vertical-align:top; margin:4px">
</p>

This is my portfolio, blog and personal website.
Written using JavaScript, built with React, tested by Cypress automation.

To run Website Locally

```bash
# install necessary packages
yarn

# run the project
yarn start
```

Open http://localhost:3000 with your browser to see the result

## Cypress automation tests

```bash
# install necessary packages
yarn

# run cypress tests
yarn cy:run
```

## Tests structure and Gherkin language

Under path: `/cypress/e2e` are all automation tests written in Gherkin language

Example:

```gherkin
Feature: Navigation links are visible and performing actions

  Background:
    Given I open the "home_page"
    And The title includes "About automation tests in Software Development"

  @regression
  Scenario Outline: Navigation item "<navigation_item>" scrolled to its assigned section
    When I click on the navigation link "<navigation_item>"
    Then The page is on the position "<position>"

    Examples:
      | navigation_item | position |
      | What I Do       | 10       |
      | About me        | 18       |
      | Cooperation     | 11       |
      | Contact         | 16       |
```
