Feature: Hide template card in trello website

    Scenario: Validate that the user can hide template card from any list
        Given The user navigate to the board
        When Clicks on template card 
        And Clicks on Actions option
        And Clicks on Hide from list option
        Then The template card will be hidden successfully
        