class SharedActions {
      openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }
}

export default SharedActions;