import HomePage from "../../pageObjects/HomePage";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter"

describe('orgFolderConfigure', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();

    it('AT_17.04_002| Move Organization Folder into Folder', () => {
        cy.createOrganizationFolderProject(newItemPage.orgFolderName)
        cy.createFolderProject(newItemPage.folderName);
        homePage
        .clickOrgFolderNameLink(newItemPage.orgFolderName)
        .clickMoveInSideMenuLink()
        .selectDestinationMoveJob(newItemPage.folderName)
        .clickMoveButton()
        headerAndFooter
        .clickJenkinsHomeLink()
        .clickFolderNameLink(newItemPage.folderName)
        .checkJobMoveInsideFolder(newItemPage.orgFolderName)
    })
})