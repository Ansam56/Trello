Feature: Move template card in trello website

    Scenario: Validate that the user can move template card to any list
        Given The user navigate to the board
        When Clicks on template card 
        And Clicks on Actions option
        And Clicks on Move option
        And Selects the destination list
        And Clicks on Move button
        Then The template card will be moved successfully
        