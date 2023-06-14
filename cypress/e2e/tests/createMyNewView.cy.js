import HomePage from "../../pageObjects/HomePage"
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json"
import myViewData from "../../fixtures/pom_fixtures/myView.json"
import ViewPage from "../../pageObjects/ViewPage";
import newViewData from "../../fixtures/pom_fixtures/newView.json"

describe('create my new view', () => {

    const homePage = new HomePage();
    const viewPage = new ViewPage(); 
      
    it('AT_09.01_006 | <My Views>Create new view', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)
        homePage
        .clickMyViewSideMenuLink()
        .verifyAndClickAddNewViewLink()
        .typeNewViewNameIntoInputField(myViewData.headerOfNewViewNameInputField)
        .checkViewTypeRadioButton(newViewData.viewTypes.myView)
        .clickCreateNewViewButton(newViewData.viewTypes.myView)
        .getNameMyViewList().should('contain', myViewData.headerOfNewViewNameInputField)
    })

    after('delete view', () => {
        viewPage
        .clickDeleteViewBtn()
        .clickMyViewDeleteOkBtn();
    })
})
