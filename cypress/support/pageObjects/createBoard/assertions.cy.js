class createBoardAssertions {
  checkBoardNameIsContain(boardName) {
    cy.findByTestId("board-name-display").should("contain", boardName);
    return this;
  }
}
export default createBoardAssertions;
