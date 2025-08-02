/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import SharedActions from "../../../support/shared/actions.cy";
import createCardTemplateActions from "../../../support/pageObjects/createCardTemplate/actions.cy";
import createCardTemplateAssertions from "../../../support/pageObjects/createCardTemplate/assertions.cy";
const boardName = "QaProject"
const listName = "My List";
const templateName = "My Card Template";

let boardUrl , boardId;

const dataUtil = new dataUtils();
const createCardTemplateAction = new createCardTemplateActions();
const createCardTemplateAssertion = new createCardTemplateAssertions();
const sharedAction = new SharedActions();


before(()=>{
    dataUtil.createBoard(boardName)
    .then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
        dataUtil.createList(listName,boardId)
    .then(()=>{
    cy.loginToTrello()
    })
})
})

Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl);
})

When("Clicks on template card icon",()=>{
    createCardTemplateAction.clicksCardTemplateIcon(listName);
})

When("Clicks on create a new template button",()=>{
   createCardTemplateAction.clicksaNewTemplateButton();
})

When("Types template name in template title input field",()=>{
    createCardTemplateAction.typesTemplateName(templateName);
})

When("Clicks on Add button",()=>{
    createCardTemplateAction.clickOnAddButton(templateName);
})


Then("The template will be created successfully",()=>{
    createCardTemplateAssertion.checkDialogBanner().checkTemplateCheckIconIsVisible().checkCardHasTemplateBadge();
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})