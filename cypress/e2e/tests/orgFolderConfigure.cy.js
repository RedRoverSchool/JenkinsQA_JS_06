import HomePage from '../../pageObjects/HomePage';
import newItemPage from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';
import orgFolderPage from '../../fixtures/pom_fixtures/orgfolderPage.json'

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

    it('AT_17.01.002 | Add description to the Organization Folder via Configure the project', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()

            .clickOrgFolderNameLink(newItemPage.orgFolderName)
            .clickConfigureTheProjectLink()
            .addDescription(OrgFolderConfigurePage.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescription()
            .should('contain.text', OrgFolderConfigurePage.description);
    });

    it.only('AT_17.05.002 | Verify possibility to enable Organization Folder', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPage.orgFolderName)
            .selectOrgFolderItem()
            .clickOkBtnAndGoOrgFolderConfig()
            .clickSaveBtnAndGoOrgFolder()
            .clickGoToDashboard()

            .clickOrgFolderNameLink(newItemPage.orgFolderName)
            .clickDisableButton()
            .clickEnableButton()
            .getDisableProjectForm()
            .should('have.text', orgFolderPage.disableOrganizationFolder)


    })
});