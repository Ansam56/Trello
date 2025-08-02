/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import deleteCardActions from "../../../support/pageObjects/deleteCard/actions.cy"
import deleteCardAssertions from "../../../support/pageObjects/deleteCard/assertions.cy";
import SharedActions from "../../../support/shared/actions.cy";
const boardName = "QaProject"
const listName = "My List";
const cardName = "My Card";

let boardUrl , boardId, idList;

const dataUtil = new dataUtils();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
const sharedAction = new SharedActions();


before(()=>{
    dataUtil.createBoard(boardName)
    .then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
        dataUtil.createList(listName,boardId)
    .then((response)=>{
       idList = response.body.id;
        dataUtil.createCard(idList,cardName).then(()=>{
                cy.loginToTrello()

        })
    })
    
})
})

Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl);
     cy.screenshot({ capture: "fullPage" });
})

When("Clicks on the card",()=>{
    deleteCardAction.clicksOnCard(cardName);
})

When("Clicks on Actions option",()=>{
   deleteCardAction.clickOnActionsOption();
})

When("Clicks on Archive option",()=>{
    deleteCardAction.clickOnArchiveOption();
})

When("Clicks on Delete option",()=>{
    deleteCardAction.clickOnDeleteOption();
})

When("Clicks on Delete button",()=>{
    deleteCardAction.clicksOnDeleteButton();
})


Then("The card will be deleted successfully",()=>{
    deleteCardAssertion.checkCardIsDeleted(cardName);
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})