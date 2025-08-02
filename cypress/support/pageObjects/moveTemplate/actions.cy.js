class moveTemplateActions {
  clickOnMoveOption() {
    cy.findByTestId("card-back-move-card-button").click();
    return this;
  }
  selectsDestinationList(destinationListName) {
    cy.findByTestId(
      "move-card-popover-select-list-destination-select--input-container"
    ).click();
    cy.findByTestId("move-card-popover-select-list-destination-select--listbox")
      .contains(destinationListName)
      .click();
    return this;
  }

  clickOnMoveButton() {
    cy.findByTestId("move-card-popover-move-button").click();
    return this;
  }
}

export default moveTemplateActions;
