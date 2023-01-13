Feature: Contact Form

  @regression
  Scenario: Validation is triggered when "Your Name" is left empty
    * I click on the Navigation link "Contact"
    When I click "Send message" button
    Then Validation message "Please fill out this field." is shown

  @regression
  Scenario: Validation is triggered when "Your Email" is left empty
    Given I am on the Home page
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    When I click "Send message" button
    Then Validation message "Please fill out this field." is shown

  @regression
  Scenario: Validation is triggered when "Your Phone" is left empty
    Given I am on the Home page
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    And I type "sample@sample.com" in field "<Your Email>"
    When I click "Send message" button
    Then Validation message "Please fill out this field." is shown

  @regression
  Scenario: Validation is triggered when "Message" is left empty
    Given I am on the Home page
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    And I type "sample@sample.com" in field "<Your Email>"
    And I type "+48321321321" in field "<Your Phone>"
    When I click "Send message" button
    Then Validation message "Please fill out this field." is shown

  @regression
  Scenario: Validation is triggered when "Email" is not proper
    Given I am on the Home page
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    And I type "notValidEmailAddress" in field "<Your Email>"
    And I type "+48321321321" in field "<Your Phone>"
    When I click "Send message" button
    Then Validation message "Please fill out this field." is shown

  @regression
  Scenario: reCAPTCHA is mandatory to be visible on the page
    Given I am on the "home_page"
    And Title includes "About automation tests in Software Development"
    * I click on the Navigation link "Contact"
    Then reCAPTCHA is visible on the page

  @regression
  Scenario: When reCAPTCHA is not passed that message is not send
    Given I am on the "home_page"
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    And I type "sample@sample.com" in field "<Your Email>"
    And I type "+48321321321" in field "<Your Phone>"
    And I type "Sample message" in field "<Message>"
    When I click "Send message" button
    Then Validation message "Pass the reCAPTCHA" is shown

  @regression
  Scenario: Email is send when all proper data are typed and reCAPTCHA is checked
    Given I am on the Home page
    * I click on the Navigation link "Contact"
    And I type "Sample Name" in field "<Your Name>"
    And I type "sample@sample.com" in field "<Your Email>"
    And I type "+48321321321" in field "<Your Phone>"
    And I type "Sample message" in field "<Message>"
    And I check reCAPTCHA
    When I click "Send message" button
    Then Validation message "Message is send" is shown
