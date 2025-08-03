class hideTemplateActions {
  clicksHideTemplateButton() {
    cy.findByTestId("card-back-archive-button").click();
  }
}

export default hideTemplateActions;
