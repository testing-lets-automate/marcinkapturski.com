<img width="1002" alt="marcinkapturski.com" src="https://user-images.githubusercontent.com/41780000/216717242-f88147a2-2110-4afb-b7d9-17ae6f58bae3.png">
<p align="center">
  <a target="_blank" href="https://marcinkapturski.com">
    <img src="https://img.shields.io/badge/Website_ marcinkapturski.com-link_here-blue?style=for-the-badge&logo=React" alt="Website marcinkapturski.com" style="vertical-align:top; margin:10px">
  </a>  
</p>

## 1. Overview

<p align="center">   
    <img src="https://img.shields.io/badge/React-_-blue?logo=React" alt="React" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/Cypress-_-blue?logo=Cypress" alt="Cypress" style="vertical-align:top; margin:4px">    
    <img src="https://img.shields.io/badge/DatoCMS-_-blue?logo=DatoCMS" alt="DatoCMS" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/GitHubActions-_-blue?logo=GitHubActions" alt="GitHub Actions" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/JavaScript-_-blue?logo=JavaScript" alt="JavaScript" style="vertical-align:top; margin:4px">
</p>

This is my portfolio, blog and personal website.
Written using JavaScript, built with React, tested by Cypress automation.

To run locally

```bash
# install necessary packages
yarn

# run the project
yarn start
```

Open http://localhost:3000 with your browser to see the result

## 2. Cypress UI tests for this project

This project is tested by Cypress UI automation

2.1. Open workflow and dispatch tests: [cy-automation-tests](https://github.com/marcinkapturski/marcinkapturski.com/actions/workflows/cy-automation-tests.yml)

![2024-09-07_13h59_44](https://github.com/user-attachments/assets/27da54b7-3a4f-4e35-a452-3186e0419162)

2.2. Check the results by opening test run details

![2024-09-07_13h54_05](https://github.com/user-attachments/assets/b7a24d1f-d827-448e-a812-2a8c7a16c119)


## 3.Tests structure and Gherkin language

Under path: `/cypress/e2e` are all automation tests written in Gherkin language

Example:

```gherkin
Feature: Navigation -> base checks

    Background:
        * I open the start page

    @regression @navigation
    Scenario Outline: Navigation item "<navigation_item>" scrolled to its assigned section
        When I click on the navigation link "<navigation_item>"
        Then the page is on the position "<position>"

        Examples:
            | navigation_item | position |
            | Start           | 0        |
            | About me        | 723      |
            | What I do       | 1543     |
            | Contact         | 3839     |
```