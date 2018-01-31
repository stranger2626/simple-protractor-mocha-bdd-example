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


const listOfSite = ['http://bash.im/', 'https://www.epam.com/'];
const listOfTitles = ['Цитатник Рунета', 'EPAM | Software Product Development Services'] 

describe('I wisit multiple sites', ()=> {

    listOfSite.forEach((site) => {
        it('I should be able to access ' + site, async () => {
            browser.get(site);
            let pageTitle = await browser.getTitle();
            let result = listOfTitles.indexOf(pageTitle);
            return expect(result).to.not.be.equal(-1)
        });
    });
    
});