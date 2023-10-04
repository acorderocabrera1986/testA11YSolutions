import { When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonUtils from "../../pages/common";
import { generateRandomNumber } from "../common";

let userData: any;

beforeEach(() => {
  cy.fixture("otherUserWithoutCertificate").then((data) => {
    userData = data;
  });
});

When("introduzco valores al formulario con datos válidos", () => {
  CommonUtils.setInputValue("#name", userData.givenName);
  CommonUtils.setInputValueTelefono(
    "#phoneNumber",
    generateRandomNumber(),
    true
  );
  CommonUtils.setInputValue("#companyName", userData.companyName);
  CommonUtils.setInputValue("#message", userData.message);
  CommonUtils.setInputValue("#email", userData.email);
});

When("introduzco valores al formulario con el campo Name sin completar", () => {
  CommonUtils.setInputValueTelefono(
    "#phoneNumber",
    generateRandomNumber(),
    true
  );
  CommonUtils.setInputValue("#companyName", userData.companyName);
  CommonUtils.setInputValue("#message", userData.message);
  CommonUtils.setInputValue("#email", userData.email);
});

When(`doy clic en el botón Submit now`, () => {
  CommonUtils.clickInElement("button[role='button']");
});

Then(`debo ver el mensaje {string} en el campo Name`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When(
  "introduzco valores al formulario con el campo Phone number sin completar",
  () => {
    CommonUtils.setInputValue("#name", userData.givenName);
    CommonUtils.setInputValue("#companyName", userData.companyName);
    CommonUtils.setInputValue("#message", userData.message);
    CommonUtils.setInputValue("#email", userData.email);
  }
);

Then(`debo ver el mensaje {string} en el campo Phone number`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When(
  "introduzco valores al formulario con el campo Company name sin completar",
  () => {
    CommonUtils.setInputValue("#name", userData.givenName);
    CommonUtils.setInputValueTelefono(
      "#phoneNumber",
      generateRandomNumber(),
      true
    );
    CommonUtils.setInputValue("#message", userData.message);
    CommonUtils.setInputValue("#email", userData.email);
  }
);

Then(`debo ver el mensaje {string} en el campo Company name`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When(
  "introduzco valores al formulario con el campo Email sin completar",
  () => {
    CommonUtils.setInputValue("#name", userData.givenName);
    CommonUtils.setInputValueTelefono(
      "#phoneNumber",
      generateRandomNumber(),
      true
    );
    CommonUtils.setInputValue("#companyName", userData.companyName);
    CommonUtils.setInputValue("#message", userData.message);
  }
);

Then(`debo ver el mensaje {string} en el campo Email`, (msg: string) => {
  CommonUtils.hasMessageNotification(msg);
});

When(
  "introduzco valores al formulario con el campo Phone number con la cantidad de dígitos incorrecta",
  () => {
    CommonUtils.setInputValue("#name", userData.givenName);
    CommonUtils.setInputValueTelefono(
      "#phoneNumber",
      generateRandomNumber(),
      false
    );
    CommonUtils.setInputValue("#companyName", userData.companyName);
    CommonUtils.setInputValue("#message", userData.message);
  }
);

When("introduzco valores al formulario con el campo Phone number intoduciendo una letra", () => {
  CommonUtils.setInputValue("#name", userData.givenName);
  CommonUtils.setInputValue("#phoneNumber", userData.wrongPhoneNumber);
  CommonUtils.setInputValue("#companyName", userData.companyName);
  CommonUtils.setInputValue("#message", userData.message);
  CommonUtils.setInputValue("#email", userData.email);
});

When(
  `introduzco valores al formulario con el correo {string} inválido`,
  (type: string) => {
    CommonUtils.setInputValue("#name", userData.givenName);
    CommonUtils.setInputValue("#phoneNumber", userData.phoneNumber);
    CommonUtils.setInputValue("#companyName", userData.companyName);
    CommonUtils.setInputValue("#message", userData.message);
    CommonUtils.setInputValue("#email", type);
  }
);