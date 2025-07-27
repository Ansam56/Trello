/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import createCardActions from "../../../support/pageObjects/createCard/actions.cy"
import createCardAssertions from "../../../support/pageObjects/createCard/assertions.cy";

const boardName = "QaProject"
const cardName = "My Card";

let boardUrl , boardId;

const dataUtil = new dataUtils();
const createCardAction = new createCardActions();
const createCardAssertion = new createCardAssertions();

before(()=>{
    // create a board in trello 
    dataUtil.createBoard(boardName)
    .then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
    })
    cy.loginToTrello()
    
})

Given("The user navigate to the board",()=>{
    createCardAction.openBoard(boardUrl)
})

When("Clicks on Add a card button",()=>{
    createCardAction.clickOnAddACardButton();
})

When("Types card name in card title input field",()=>{
    createCardAction.typeInCardTitleInputField(cardName)
})

When("Clicks on Add Card button",()=>{
    createCardAction.clickOnAddCardButton();
})

Then("The card will be created successfully",()=>{
    createCardAssertion.checkListIsContainCard(cardName)
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})