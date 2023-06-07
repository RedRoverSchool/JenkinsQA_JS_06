/// <reference types="cypress"/>

import {multibranchPipelineName} from "../../fixtures/pom_fixtures/newItemPage.json" 
import HomePage from "../../pageObjects/HomePage";

describe('multibranchPipelineDeleteDropDownMenu', () => {

    const homePage = new HomePage();

    it('delete Multibranch Pipeline using the dropdown menu', () => {
        homePage.clickNewItemSideMenuLink()
                .typeNewItemNameInputField(multibranchPipelineName)
                .clickMultibranchPipeLine2()   
                .clickOkBtnAndGoMultiPipelineConfig()   
                .clickJenkinsBtn()
                .getMultibranchName()
                .selectDropdownMenuDelete()
                .clickYesBtn()
                .should('not.contain.text', multibranchPipelineName)
});
});

        

//         //cy.get('a[href="/view/all/newJob"]').click()
//         //cy.get('#name').type(deleteMultiplePipeline.multiplePiplineName)
//         cy.get('span').contains('Multibranch Pipeline').click()
//         cy.get('#ok-button').click()
//         cy.get('[alt= "Jenkins"]').click()

//         // cy.get('#main-panel').should('contain.text', deleteMultiplePipeline.multiplePiplineName)

//         cy.get('a[href="job/Olga_Test/"]').realHover()
//         cy.get('#job_Olga_Test > td:nth-child(3) > a > button').should('be.visible').click()
//         cy.get('#breadcrumb-menu').should('be.visible')
//         cy.get('.icon-edit-delete').click()
//         cy.get("button[name = 'Submit']").click()
//         cy.get('#main-panel').should('not.contain.text', deleteMultiplePipeline.multiplePiplineName)
    // })
// })
