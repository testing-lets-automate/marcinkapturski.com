Feature: Images -> base checks

    @regression @images
    Scenario Outline: <image> is loaded on the Start page
        When I open the start page
        * the title includes "About automation tests in Software Development"
        Then "<image>" is visible the with content "<content>"

        Examples:
            | image      | content                    |
            | logo-image | data:image/png;base64      |
            | hero-image | /static/media/banner_image |
