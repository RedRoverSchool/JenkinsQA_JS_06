/// <reference types="cypress" />
import Header from "../../pageObjects/Header"
import HomePage from "../../pageObjects/HomePage"
import NewItemProjectPage from "../../pageObjects/NewItemProjectPage";

import newItems from "../../fixtures/newItems.json"

const header = new Header();
const homePage = new HomePage();
const newItemProjectPage = new NewItemProjectPage();

describe('createJobFP', ()=>{
    it('verify user can create job FP', ()=>{
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtn()
            .clickSubmitBtn()

        header
            .clickLogoIcon()
            .getCreatedProjectName()
            .should('contain', newItems.projectName)
    })

    it('verify user can edit project description', ()=>{
        homePage
            .clickNewItemMenuLink()
            .typeProjectName(newItems.projectName)
            .clickTypeProjectFP()
            .clickOKBtn()
            .typeDescriptionToProject('text')
            .clickSubmitBtn()
            .getDescriptionText()
            .should('contain', 'text')

        header
            .clickLogoIcon()
            .clickCreatedProjectLink()
            .getDescriptionText()
            .should('contain', 'text')

        newItemProjectPage
            .clickDescriptionBtn()
            .typeDescriptionText('new text')
            .clickSubmitBtn()
            .getDescriptionText()
            .should('contain', 'new text')

    })
})