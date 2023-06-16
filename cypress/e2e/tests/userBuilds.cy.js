/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userBuildsPageData from "../../fixtures/pom_fixtures/userBuildsPage.json";
import freestyleProjectPage from "../../fixtures/pom_fixtures/freestyleProjectPage";
import HomePage from "../../pageObjects/HomePage";

describe('userBuilds', () => {
    const headerAndFooter = new HeaderAndFooter();
    const homePage = new HomePage();

    it('AT_04.06.008 | Breadcrumbs Verify user can see his username in the title', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserBuildsMenu()
            .getUserBuildsTitle()
            .should('eq', `${Cypress.env('local.admin.username')} ${userBuildsPageData.titleText}`);
    });

    userBuildsPageData.tableSize.forEach((size) => {
        it(`AT_04.06.002 Verify clicking on ${size.size} icon will change the icon size`, function() {
            cy.createFreestyleProject(freestyleProjectPage.freestyleProjectNewName)
            homePage
                .clickOnScheduleBuildBtn()
            headerAndFooter
                .clickUserDropDownBtn()
                .selectUserBuildsMenu()
                .clickUserBuildsTableSizeBtns(size.size)
                .getStatusIcon().should('have.css', 'height', size.heigth)
        });
    });

    it('AT_01.04_006| User builds link| Verify the side panel', () =>{
       headerAndFooter
       .clickUserDropDownBtn() 
       .selectUserBuildsMenu()
       .getUserBuildsSidePanel().should('be.visible')
    });

    it('AT_01.04.04 | User Builds link | Verify tasks links on the side panel', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserBuildsMenu()
            .getUserBuildsSigePanelTaskLinks().each(($el, index) => {
                cy.wrap($el).should('be.visible')
                cy.wrap($el).should('have.attr', 'href')
            })
            .then(($els) => {
                return Cypress._.map($els, 'innerText')
            })
            .should('deep.equal', userBuildsPageData.SidePanelTasks)
      });
})
