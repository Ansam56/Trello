/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../support/pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../support/pageObjects/createBoard/assertions.cy";
const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions()

Given('The user login to trello website', () => {
    cy.loginToTrello();
})

When("Clicks on create button in navbar",()=>{
    createBoardAction.clickOnNavbarCreateButton()
})

When("Choose create board option",()=>{
    createBoardAction.clickOnCreateBoardOption();

})

When("Types board name in board title field",()=>{
    createBoardAction.typeInBoardTitleInputField("Test Board");

})

When("Clicks on create button",()=>{
    createBoardAction.clickOnCreateButton();

})

Then("The board should be created successfully",()=>{
     createBoardAssertion.checkBoardNameIsContain("Test Board")

})