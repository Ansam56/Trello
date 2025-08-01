class createCardTemplateActions {
    clicksCardTemplateIcon() {
        cy.wait(2000);
        cy.findByTestId("card-template-list-button").first().click();
        return this;
    }

    clicksaNewTemplateButton() {
        cy.findByTestId("create-new-template-card-button").click();
        return this;
    }

    typesTemplateName(templateName) {
        cy.findByTestId("create-template-card-composer").type(templateName);
        return this;
    }

    clickOnAddButton() {
        cy.findByTestId("new-template-card-submit-button").click();
        return this;
    }

}

export default createCardTemplateActions;