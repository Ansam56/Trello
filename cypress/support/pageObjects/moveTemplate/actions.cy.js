class moveTemplateActions {
    clicksOnCard(cardName) {
        cy.wait(2000)
        cy.contains(cardName).click()
        return this;
    }

    clickOnActionsOption() {
        cy.findByTestId('card-back-actions-button').click();
        return this;
    }

    clickOnMoveOption() {
        cy.findByTestId('card-back-move-card-button').click();
        return this;
    }
    selectsDestinationList(destinationListName) {
        cy.findByTestId('move-card-popover-select-list-destination-select--input-container').click();
        cy.findByTestId('move-card-popover-select-list-destination-select--listbox').contains(destinationListName).click();
        return this;
    }

    clickOnMoveButton() {
        cy.findByTestId('move-card-popover-move-button').click();
        return this;
    }

}

export default moveTemplateActions;