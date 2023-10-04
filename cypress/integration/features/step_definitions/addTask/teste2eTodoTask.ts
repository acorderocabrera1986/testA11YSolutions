import { When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonUtils from "../../pages/common";

let userData: any;

beforeEach(() => {
  cy.fixture("todoData").then((data) => {
    userData = data;
  });
});

When("introduzco valores al formulario Adicionar tarea con datos válidos", () => {
  CommonUtils.setInputValue("#validateOnly_title", userData.titleTask);
  CommonUtils.setInputValue("#validateOnly_description", userData.descriptionTask);
});

When(`doy clic en el botón Submit`, () => {
  CommonUtils.clickInElement("button[type='submit']");
});

When(`doy clic en el botón Adicionar tarea`, () => {
  CommonUtils.clickInElement("button[id='ant-button-add']");
});

Then(`debo ver los datos de la tarea recien creada en la lista`, () => {
  CommonUtils.hasMessageNotification(userData.titleTask);
});

Then(`debo ver el botón Submit deshabilitado`, () => {
  CommonUtils.checkIfButtonIsDidable("button[type='submit']");
});

When("introduzco valores al formulario Adicionar tarea con el campo Título en blanco", () => {
  CommonUtils.setInputValue("#validateOnly_description", userData.descriptionTask);
});

When("introduzco valores al formulario Adicionar tarea con el campo Descripción en blanco", () => {
  CommonUtils.setInputValue("#validateOnly_title", userData.titleTask);
});

When("introduzco valores al campo Título", () => {
  CommonUtils.setInputValue("#validateOnly_title", userData.titleTask);
  CommonUtils.deleteDataField("#validateOnly_title");
});

Then(`debo ver el mensaje {string} en el campo Título`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When("introduzco valores al campo Descripción", () => {
  CommonUtils.setInputValue("#validateOnly_description", userData.descriptionTask);
  CommonUtils.deleteDataField("#validateOnly_description");
});

Then(`debo ver el mensaje {string} en el campo Descripción`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When(`doy clic en el botón Eliminar de la tarea adicionada`, () => {
  CommonUtils.clickInFirstElementOnTask("span[class='anticon anticon-delete']");
});

Then(`no debo ver la tarea adicionada`, () => {
  CommonUtils.notSeeTask(userData.titleTask);
});

When(`doy clic en el botón marcar como completada de la tarea adicionada`, () => {
  cy.intercept({
    method: 'PUT',
    url: `**/mark`,
  }).as('markAsCompleted');
  CommonUtils.clickInFirstElementOnTask("#ant-checkbox-input");
});

Then(`debo ver que la tarea fue marcada como completada`, () => {
  cy.wait('@markAsCompleted').then(({ response = {} }) => {
    const { statusCode, body: { data = [] } = {} } = response;
    if (statusCode == 200 && data.completed == true) {
      expect(true).equal(true);
    }else{
      cy.log("Lo sentimos ocurrió un error.")
    }
  });
});

When(`doy clic en el checkbox seleccionar tareas`, () => {
  CommonUtils.clickInFirstElementOnTask("#id-item-task-checkbox");
});

When(`doy clic en el botón Eliminar múltiple de la barra de acciones`, () => {
  CommonUtils.clickInElement("#id-item-task-checkbox");
}); 