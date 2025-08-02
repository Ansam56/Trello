import SharedActions from "../../shared/actions.cy";
const sharedAction = new SharedActions();
class moveTemplateAssertions {
  checksDialogHasDestinationListName(destinationListName) {
    cy.get(`button[title="${destinationListName}"]`).should("exist");
    return this;
  }

  checksTemplateCardNotInPreviousList(idList, templateName) {
    sharedAction.closeCardDialog();
    cy.get(`[data-list-id="${idList}"]`).should("not.contain", templateName);
    return this;
  }

  checksTemplateCardInDestinationList(idDestinationList, templateName) {
    cy.get(`[data-list-id="${idDestinationList}"]`).should(
      "contain",
      templateName
    );
    return this;
  }
}

export default moveTemplateAssertions;
