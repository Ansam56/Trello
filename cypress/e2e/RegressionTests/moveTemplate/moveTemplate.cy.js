/// <reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import SharedActions from "../../../support/shared/actions.cy";
import moveTemplateActions from "../../../support/pageObjects/moveTemplate/actions.cy";
import moveTemplateAssertions from "../../../support/pageObjects/moveTemplate/assertions.cy";
const boardName = "QaProject";
const listName = "My List";
const destinationListName = "Doing List";
const templateName = "My Card Template";

let boardUrl, boardId, idList, idDestinationList;

const dataUtil = new dataUtils();
const moveTemplateAction = new moveTemplateActions();
const moveTemplateAssertion = new moveTemplateAssertions();
const sharedAction = new SharedActions();

before(() => {
  dataUtil.createBoard(boardName).then((response) => {
    boardUrl = response.body.url;
    boardId = response.body.id;
    dataUtil.createList(listName, boardId).then((response) => {
      idList = response.body.id;
      dataUtil.createCardTemplate(idList, templateName).then(() => {
        cy.loginToTrello();
      });
    });

    dataUtil.createList(destinationListName, boardId).then((response) => {
      idDestinationList = response.body.id;
    });
  });
});

Given("The user navigate to the board", () => {
  sharedAction.openBoard(boardUrl);
});

When("Clicks on template card", () => {
  moveTemplateAction.clicksOnCard(templateName);
});

When("Clicks on Actions option", () => {
  moveTemplateAction.clickOnActionsOption();
});

When("Clicks on Move option", () => {
  moveTemplateAction.clickOnMoveOption();
});

When("Selects the destination list", () => {
  moveTemplateAction.selectsDestinationList(destinationListName);
});

When("Clicks on Move button", () => {
  moveTemplateAction.clickOnMoveButton();
});

Then("The template card will be moved successfully", () => {
  moveTemplateAssertion
    .checksDialogHasDestinationListName(destinationListName)
    .checksTemplateCardNotInPreviousList(idList, templateName)
    .checksTemplateCardInDestinationList(idDestinationList, templateName);
});

after(() => {
  cy.wait(3000);
  dataUtil.deleteBoard(boardId);
});
