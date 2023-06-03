/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";

describe('newItem', () => {

    const homePage = new HomePage();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemNamesList()
            .should('deep.equal', newItemPage.newItemNames);
    });
});
