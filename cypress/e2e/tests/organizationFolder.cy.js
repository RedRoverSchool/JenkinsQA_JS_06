import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter"

describe('orgFolderConfigure', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();

    it('AT_17.04_002 | Move Organization Folder into Folder', () => {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)
        cy.createFolderProject(newItemPageData.folderName);
        homePage
        .clickOrgFolderNameLink(newItemPageData.orgFolderName)
        .clickMoveInSideMenuLink()
        .selectDestinationMoveJob(newItemPageData.folderName)
        .clickMoveButton()
        headerAndFooter
        .clickJenkinsHomeLink()
        .clickFolderNameLink(newItemPageData.folderName)
        .checkJobMoveInsideFolder(newItemPageData.orgFolderName)
    })
})
