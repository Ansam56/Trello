import SharedActions from "../../shared/actions.cy";
const sharedAction = new SharedActions();
class hideTemplateAssertions {
  checksTemplateCardIsHiddenFromList(idList, cardId) {
    sharedAction.closeCardDialog();
    cy.get(`[data-list-id="${idList}"]`)
      .find(`[data-card-id="${cardId}"]`)
      .should("not.exist");
    return this;
  }
}

export default hideTemplateAssertions;
