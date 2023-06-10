import ViewPage from "./ViewPage";
import viewEditData from "../fixtures/pom_fixtures/viewEdit.json";

class ViewEditPage {
    getBodyViewEditPage = () => cy.get('body');
    getOkButtonSaveView = () => cy.get('button[name="Submit"]');

    clickOkButtonSaveView() {
        this.getBodyViewEditPage().then(($body) => {
            if ($body.find(viewEditData.okButtonSaveViewLocator).length > 0)
                this.getOkButtonSaveView().click();
        });
        return new ViewPage();
    }
}
export default ViewEditPage;