import SharedActions from "../../shared/actions.cy";

const sharedAction = new SharedActions();
class createCardTemplateAssertions {
  checkDialogBanner() {
    cy.findByTestId("template-card-back-banner").should(
      "contain",
      "This is a Template card."
    );
    return this;
  }
  checkTemplateCheckIconIsVisible() {
    sharedAction.clickOnActionsOption();
    cy.findByTestId("CheckIcon").should("be.visible");
    return this;
  }
  checkCardHasTemplateBadge() {
    sharedAction.closeCardDialog();
    cy.findByTestId("trello-card").should(
      "contain",
      "This card is a template."
    );
    return this;
  }
}

export default createCardTemplateAssertions;
