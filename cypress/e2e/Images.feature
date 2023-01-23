Feature: Page Images are loaded

    @regression
    Scenario Outline: Page Images are loaded on the Main page <image>
        * I open the "home_page"
        * The title includes "About automation tests in Software Development"
        Then Image "<image>" is visible on the page with "<content>"

        Examples:
            | image      | content |
            | logo-image | 777     |
# | web-automation    | data:image/png;base64 |
# | mobile-automation | data:image/png;base64 |
# | test-strategies   | data:image/png;base64 |
# | hero-image        | data:image/png;base64 |
