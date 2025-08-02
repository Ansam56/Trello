/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import SharedActions from "../../../support/shared/actions.cy";
import updateTemplateNameActions from "../../../support/pageObjects/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../support/pageObjects/updateTemplateName/assertions.cy";
const boardName = "QaProject"
const listName = "My List";
const templateName = "My Card Template";
const newTemplateName = "Updated Template Name";

let boardUrl , boardId, idList;

const dataUtil = new dataUtils();
const updateTemplateNameAction = new updateTemplateNameActions();
const updateTemplateNameAssertion = new updateTemplateNameAssertions();
const sharedAction = new SharedActions();


before(()=>{
    dataUtil.createBoard(boardName)
    .then((response)=>{
        boardUrl = response.body.url
        boardId = response.body.id
        dataUtil.createList(listName,boardId)
    .then((response)=>{
        idList = response.body.id;
        dataUtil.createCardTemplate(idList,templateName).then(()=>{
                cy.loginToTrello();
        })
    })
})
})

Given("The user navigate to the board",()=>{
    sharedAction.openBoard(boardUrl);
})

When("Clicks on template card",()=>{
    updateTemplateNameAction.clicksCardTemplate();;
})

When("Types the new template name in template title input field",()=>{
   updateTemplateNameAction.typesNewTemplateName(newTemplateName);
})


Then("The template name will be updated successfully",()=>{
    updateTemplateNameAssertion.checkNewTemplateNameinDialog(newTemplateName).checkNewTemplateNameinCard(newTemplateName);
    
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})