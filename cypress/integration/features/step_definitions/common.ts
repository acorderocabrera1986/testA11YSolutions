import { When } from 'cypress-cucumber-preprocessor/steps';
import CommonUtils from '../pages/common';

export const generateRandomNumber = (): string => {
  return `5${Math.floor(1000000 + Math.random() * 9000000)}`;
};

When('visito la url {string}', (url: string) => {
  CommonUtils.visitUrl(url);
});
