import SharedActions from "../../shared/actions.cy";

const sharedAction = new SharedActions();

class updateTemplateNameAssertions {
  checkNewTemplateNameinDialog(newTemplateName) {
    cy.findByTestId("card-back-title-input").should(
      "have.value",
      newTemplateName
    );
    return this;
  }

  checkNewTemplateNameinCard(newTemplateName) {
    sharedAction.closeCardDialog();
    cy.findByTestId("trello-card").should("contain", newTemplateName);
    return this;
  }
}

export default updateTemplateNameAssertions;
