Feature: Update template name in trello website

    Scenario: Validate that the user can update template name
        Given The user navigate to the board
        When Click on template card
        And Types the new template name in template title input field
        Then The template name will be updated successfully
        