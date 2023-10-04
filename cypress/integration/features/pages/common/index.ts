let isDeleteButton;
let count = 0;

class CommonUtils {
  
  static clickInElement(selector: string) {
    cy.get(selector).click({ force: true });
  }

  static setInputValue(selector: string, value: string) {
    cy.get(selector)
      .clear()
      .then(() => cy.get(selector).click().type(value));
  }

  static hasMessageNotification(message: string) {
    cy.contains(message).should("be.visible");
  }

  static setInputValueTelefono(
    selector: string,
    value: string,
    iscorrect: boolean
  ) {
    const deleteButton = cy.get(selector).then(($el) => {
      count = $el.length;
      isDeleteButton = $el.hasClass("anticon anticon-delete");
      while (count != 1) {
        cy.get("#delete-element-button").click({ multiple: true });
        count--;
      }
    });
    if (iscorrect) {
      for (var i = 0; i <= 7; i++) {
        cy.get(selector).type("{backspace}");
      }
      for (var i = 0; i <= 7; i++) {
        cy.get(selector).type(value[i]);
      }
    } else if (!iscorrect) {
      for (var i = 0; i <= 7; i++) {
        cy.get(selector).type("{backspace}");
      }
      for (var i = 0; i <= 6; i++) {
        cy.get(selector).type(value[i]);
      }
    }
  }

  static visitUrl(urlApp: string) {
    cy.visit(urlApp);   
  }
 }
export default CommonUtils;
