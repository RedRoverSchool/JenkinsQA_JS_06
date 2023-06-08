import HomePage from '../../pageObjects/HomePage';
import newItemPageData from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePageData from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';

describe('orgFolderConfigure', () => {
    const homePage = new HomePage();

    it('AT_17.01.001 | Change status folder to disable', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)
         
        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
            .getEnableProjectForm()
            .should('contain.text', OrgFolderConfigurePageData.disableMessage);
    });

    it('AT_17.01.002 | Add description to the Organization Folder via Configure the project', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .addDescription(OrgFolderConfigurePageData.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescription()
            .should('contain.text', OrgFolderConfigurePageData.description);
    });

    it('AT_17.01.003 | Add Display Name to the Organization Folder via Configure', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .addDisplayName(OrgFolderConfigurePageData.displayName)
            .clickSaveBtnAndGoOrgFolder()
            .getOrgFolderHeader()
            .should('contain.text', OrgFolderConfigurePageData.displayName);
    });
});
