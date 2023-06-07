import HomePage from '../../pageObjects/HomePage';
import { orgFolderName } from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePage from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';

describe('orgFolderConfigure', () => {
    const homePage = new HomePage();

    it('AT_17.01.001 | Change status folder to disable', () => {
        cy.createOrgFolderProject(orgFolderName)
         
        homePage
            .clickOrgFolderNameLink(orgFolderName)
            .clickConfigureTheProjectLink()
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
            .getEnableProjectForm()
            .should('contain.text', OrgFolderConfigurePage.disableMessage);
    });

    it('AT_17.01.002 | Add description to the Organization Folder via Configure the project', () => {
        cy.createOrgFolderProject(orgFolderName)

        homePage
            .clickOrgFolderNameLink(orgFolderName)
            .clickConfigureTheProjectLink()
            .addDescription(OrgFolderConfigurePage.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescription()
            .should('contain.text', OrgFolderConfigurePage.description);
    });
});