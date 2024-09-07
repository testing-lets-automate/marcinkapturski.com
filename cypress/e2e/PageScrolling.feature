Feature: Scrolling -> base checks

  Background:
    * I open the start page

  @regression @scroll
  Scenario: ScrollToTheTop button is moving page to the top
    * I click on the navigation link "Contact"
    When I click the ScrollToTheTop button
    Then the page position is the top

  @regression @scroll
  Scenario: Clicking on the page logo is moving page to the top
    * I click on the navigation link "Contact"
    # * the page is on the position "3706" # working only with local run
    * the page is on the position "3839"
    When I click on logo
    Then the page position is the top

  @regression @scroll
  Scenario: The Hero button is scrolling page down
    When I click on Hero button
    Then the page position is not the top
