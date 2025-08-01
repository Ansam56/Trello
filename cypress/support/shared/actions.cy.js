class SharedActions {
      openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }

    closeCardDialog(){
        cy.findByTestId("CloseIcon").click();
        return this;
    }

}

export default SharedActions;