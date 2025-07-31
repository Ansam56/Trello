Feature: Ceate Template in trello website

    Scenario: Validate that the user can create a new template
        Given The user navigate to the board
        When Click on template card icon
        And Clicks on create a new template button
        And Types template name in template title input field
        And Click on Add button
        Then The template will be created successfully