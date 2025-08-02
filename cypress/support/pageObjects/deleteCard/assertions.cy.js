class deleteCardAssertions {
  checkCardIsDeleted(cardId) {
    cy.get(`[data-card-id="${cardId}"]`).should("not.exist");
    return this;
  }
}
export default deleteCardAssertions;
