import HomePage from '../../pageObjects/HomePage';
import newItemPage from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigPage.json';

describe('orgFolderConfigurate', () => {
    const homePage = new HomePage();

    it('AT_17.01.001 | Change status folder to disable', () => {
        homePage.createNewOrgFolder(newItemPage.orgFolderName)
        homePage
            .clickBeforeCreatedOrgFolder()
            .clickConfigureTheProjectLink()
            .clickDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
            .getDisabledProject()
            .should('contain.text', OrgFolderConfigurePage.disableMessage);
    });
});