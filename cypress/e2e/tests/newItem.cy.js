/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import errorMessage from "../../fixtures/pom_fixtures/errorPageData.json";
import ErrorMessagePage from "../../pageObjects/ErrorMessagePage"

describe('newItem', () => {

    const homePage = new HomePage();
    const errorPage = new ErrorMessagePage();

    it('AT_05.08.011 | Verify New Item Names', () => {
        homePage
            .clickNewItemSideMenuLink()
            .getNewItemNamesList()
            .should('deep.equal', newItemPage.newItemNames);
    });

    it('AT_5.06_001| Create a new Organization Folder', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()
            .getMainPanel()
            .should('contain.text', newItemPage.orgFolderName);
    });

    newItemPage.newItemNames.forEach((newItemNames,idx) => {
        it(`AT_05.05_009 | Create a new ${newItemNames} using name with more then 255 valid characters`, () => {
            homePage
                .clickNewItemSideMenuLink()
                .typeNewItemNameInputField(newItemPage.character.repeat(newItemPage.number))
                .clickEachItemsNameFromMenuListItem(idx)
                .clickOkBtnAndGoErrorPage()
            errorPage
                .verifyErrorMessageText()
        })
    })

});
