## Overview
<img width="1002" alt="marcinkapturski.com" src="https://user-images.githubusercontent.com/41780000/216717242-f88147a2-2110-4afb-b7d9-17ae6f58bae3.png">


This is my personal website, blog and part of my portfolio.
Written using JavaScript, built with React, tested by Cypress automation.

## Table of Contents

<details><summary>Click here to read about: Website details</summary>
<p>

  ## Website

  ##Run Website Locally

```bash
# install necessary packages
yarn

# run the project
yarn start
```

Open http://localhost:3000 with your browser to see the result
</p>
</details>
<details><summary>Click here to read about: UI Cypress tests</summary>
<p>

  ## UI Cypress tests

  
  ## Run Tests in console

```bash
# install necessary packages
yarn

# run cypress tests
yarn cy:run
```

Test results will be displayed like on this example


![Screen Shot 2023-01-14 at 2 05 21 PM](https://user-images.githubusercontent.com/41780000/212472955-f13dd7d9-5564-4086-bcf2-5b4a7edb2e39.png)


  
  ## Run Tests in Cypress window
  
```bash
# install necessary packages
yarn

# run cypress service window
yarn cy:open
```

Here is example of Cypress service window with example Cucumber Feature files

![Screen Shot 2023-01-14 at 2 10 29 PM](https://user-images.githubusercontent.com/41780000/212473176-415976ab-d956-4218-a3b0-7b00117086ad.png)
</p>
</details>

<details><summary>Click here to read about: Tests structure and Gherkin language</summary>
<p>

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


</p>
</details>
