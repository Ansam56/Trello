/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import SharedActions from "../../../support/shared/actions.cy";
import hideTemplateActions from "../../../support/pageObjects/hideTemplate/actions.cy";
import hideTemplateAssertions from "../../../support/pageObjects/hideTemplate/assertions.cy";
const boardName = "QaAnsam";
const listName = "My List Ansam";
const templateName = "My Card Template Ansam";

let boardUrl, boardId, idList, cardId;

const dataUtil = new dataUtils();
const hideTemplateAction = new hideTemplateActions();
const hideTemplateAssertion = new hideTemplateAssertions();
const sharedAction = new SharedActions();

before(() => {
  cy.loginToTrello();
  dataUtil.createBoard(boardName).then((response) => {
    boardUrl = response.body.url;
    boardId = response.body.id;
    cy.log(`Board id: ${boardId}`);
    dataUtil.createList(listName, boardId).then((response) => {
      idList = response.body.id;
      dataUtil.createCardTemplate(idList, templateName).then((response) => {
        cardId = response.body.id;
      });
    });
  });
});

Given("The user navigate to the board", () => {
  sharedAction.openBoard(boardUrl);
});

When("Clicks on template card", () => {
  sharedAction.clicksOnCard(templateName);
});

When("Clicks on Actions option", () => {
  sharedAction.clickOnActionsOption();
});

When("Clicks on Hide from list option", () => {
  hideTemplateAction.clicksHideTemplateButton();
});

Then("The template card will be hidden successfully", () => {
  hideTemplateAssertion
    .checksVisisbiltyForShoWInListOption()
    .checksTemplateCardIsHiddenFromList(idList, cardId);
});

after(() => {
  cy.wait(5000);
  dataUtil.deleteBoard(boardId);
});
