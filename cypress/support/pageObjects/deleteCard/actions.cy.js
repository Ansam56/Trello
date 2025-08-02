class deleteCardActions {
  clicksOnCard(cardName) {
    cy.wait(2000);
    cy.contains(cardName).click();
    return this;
  }

  clickOnActionsOption() {
    cy.findByTestId("card-back-actions-button").click();
    return this;
  }

  clickOnArchiveOption() {
    cy.findByTestId("card-back-archive-button").click();
    return this;
  }

  clickOnDeleteOption() {
    cy.findByTestId("card-back-delete-card-button").click();
    return this;
  }
  clicksOnDeleteButton() {
    cy.findByTestId("popover-confirm-button").click();
    return this;
  }
}

export default deleteCardActions;
