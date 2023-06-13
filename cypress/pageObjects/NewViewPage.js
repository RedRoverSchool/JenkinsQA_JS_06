import ViewPage from "./ViewPage";
import ViewEditPage from "./ViewEditPage";
import newViewData from "../fixtures/pom_fixtures/newView.json";

class NewViewPage {
    getHeaderOfNewViewNameInputField = () => cy.get('.jenkins-form-label.help-sibling');
    getNewViewNameInputField = () => cy.get('#name');
    getViewsTypeRadioButtonsList = () => cy.get('.jenkins-radio__label');
    getCreateNewViewButton = () => cy.get('#ok');

    typeNewViewNameIntoInputField(viewName) {
        this.getNewViewNameInputField().type(viewName);
        return this;
    };

    checkViewTypeRadioButton(viewType) {
        this.getViewsTypeRadioButtonsList().contains(viewType).click();
        return this;
    };

    clickCreateNewViewButton(viewType) {
        this.getCreateNewViewButton().click();
        if (viewType == newViewData.viewTypes.myView) {
            return new ViewPage();
        } else {
            return new ViewEditPage();
        }
    };
}
export default NewViewPage;