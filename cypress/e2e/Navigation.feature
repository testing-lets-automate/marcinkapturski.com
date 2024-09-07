Feature: Navigation -> base checks

    Background:
        * I open the start page

    # @regression @BUG
    # Scenario: Start page contain title "About automation tests in Software Development"
    #     Then the title includes "About automation tests in Software Development" ### BUG ###

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

#working only with local run
# Examples:
#     | navigation_item | position |
#     | Start           | 0        |
#     | About me        | 723      |
#     | What I do       | 1497     |
#     | Contact         | 3706     |