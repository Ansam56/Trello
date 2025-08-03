class updateTemplateNameActions {
  clicksaNewTemplateButton() {
    cy.findByTestId("create-new-template-card-button").click();
    return this;
  }

  typesNewTemplateName(newTemplateName) {
    cy.findByTestId("card-back-title-input").clear().type(newTemplateName);
    return this;
  }
}

export default updateTemplateNameActions;
