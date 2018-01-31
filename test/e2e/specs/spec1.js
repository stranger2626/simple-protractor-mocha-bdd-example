'use strict';
const chai =  require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const stepFunctions = require('../utils/utils.js')
const elementHelper = stepFunctions.getPageObjectElement;

const TIMEOUT = 40*1000;

describe('I should be able to access menu on epam.com', () => {
    it('I should be on epam.com', async () => {
        browser.get('https://www.epam.com/');
        let currentUrl = await browser.getCurrentUrl();
        return expect(currentUrl).to.be.equal('https://www.epam.com/');
    });

    it('I wait until menu is visible', () => {
        let element = elementHelper('Menu');
        let expectedConditionFunction = stepFunctions.expectedCondition('visible');
        return browser.wait(expectedConditionFunction(element), TIMEOUT);
    });

    it('I click menu', () => {
        return elementHelper('Menu').click();
    });

    it('I wait until expanded menu is visible', () => {
        let element = elementHelper('Expanded Menu');
        let expectedConditionFunction = stepFunctions.expectedCondition('visible');
        return browser.wait(expectedConditionFunction(element), TIMEOUT);
    });

    it('Count of Expanded Menu Sublists should be 4', async () => {
        let element = elementHelper('Expanded Menu Sublists');
        let elementCount = await element.count();
        return expect(elementCount).to.be.equal(4);    
    });

    it('I wait 10 seconds', () => {
        return browser.sleep(10000);
    });
});