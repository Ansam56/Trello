class SharedActions {
  openBoard(boardUrl) {
    cy.visit(boardUrl);
    return this;
  }

  closeCardDialog() {
    cy.findByTestId("CloseIcon").click();
    return this;
  }

  clickOnActionsOption() {
    cy.findByTestId("card-back-actions-button").click();
    return this;
  }

  clicksOnCard(cardName) {
    cy.wait(2000);
    cy.contains(cardName).click();
    return this;
  }
}

export default SharedActions;
