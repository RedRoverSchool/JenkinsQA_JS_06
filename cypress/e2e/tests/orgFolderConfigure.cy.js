import HomePage from '../../pageObjects/HomePage';
import newItemPage from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';

describe('orgFolderConfigure', () => {
    const homePage = new HomePage();

    it('AT_17.01.001 | Change status folder to disable', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()

            .clickOrgFolderNameLink(newItemPage.orgFolderName)
            .clickConfigureTheProjectLink()
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
            .getEnableProjectForm()
            .should('contain.text', OrgFolderConfigurePage.disableMessage);
    });
});