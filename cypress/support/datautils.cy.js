import { APIKey, APIToken } from "../support/constans.cy";
class dataUtils {
  createBoard = (boardName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`
    );
  };

  deleteBoard = (boardId) => {
    return cy.request(
      "DELETE",
      `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`
    );
  };

  createList = (listName, boardId) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${APIKey}&token=${APIToken}`
    );
  };

  createCard = (idList, cardName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/cards?idList=${idList}&name=${cardName}&key=${APIKey}&token=${APIToken}`
    );
  };

  createCardTemplate = (idList, templateName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/cards?idList=${idList}&name=${templateName}&isTemplate=true&key=${APIKey}&token=${APIToken}`
    );
  };
}
export default dataUtils;

//https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-post
