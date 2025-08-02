Feature: Delete Card in trello website

    Scenario: Validate that the user can delete a card
        Given The user navigate to the board
        When Clicks on the card 
        And Clicks on Actions option
        And Clicks on Archive option
        And Clicks on Delete option
        And Clicks on Delete button
        Then The card will be deleted successfully
