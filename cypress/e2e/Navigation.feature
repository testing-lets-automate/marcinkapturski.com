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
      | Home page       | 10       |
      | About me        | 18       |
      | What I do       | 16       |
      | Blog            | 34       |

  @regression
  Scenario: ScrollToTheTop button is scrolling page to the top
    * I click on the navigation link "Contact"
    When I click the ScrollToTheTop button
    Then The page position is the top

  @regression
  Scenario: Clicking on the logo is scrolling page to the top
    * I click on the navigation link "Contact"
    * I click on image "logo-image"
    Then The page position is the top

  @regression
  Scenario: The Hero button is scrolling page to the Work with me section
    When I click on Hero button
    Then The page is on the position "17"
