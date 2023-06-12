import HomePage from "../../pageObjects/HomePage"
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json"
import myView from "../../fixtures/pom_fixtures/myView.json"
import MyViewPage from "../../pageObjects/MyViewPage";


describe('my new view', () => {

    const homePage = new HomePage();
    const myViewPage = new MyViewPage(); 
      
    it('My Views Create new view', () => {
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newItemPage.freestyleProjectName)
        .selectFreestyleProjectItem()
        .clickOkBtnAndGoFreestyleProjectConfig()
        .clickSaveBtnAndGoFreestyleProject()
        .clickHomePageLink()
        .clickMyViewSideMenuLink()
        .clickNewViewBtn()
        .typeNameViewToInputField(myView.viewName)
        .clickAddNewViewRadioBtn()
        .clickDescriprionSaveBtn()
        .getNameMyView().should('have.text', myView.viewName)
    })

    after('delete view', () => {
        myViewPage
        .clickDeleteViewBtn()
        .clickMyViewDeleteOkBtn();
    })
})
