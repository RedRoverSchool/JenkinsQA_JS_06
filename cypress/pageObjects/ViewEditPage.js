import ViewPage from "./ViewPage";
import viewEditData from "../fixtures/pom_fixtures/viewEdit.json";

class ViewEditPage {
    getBodyViewEditPage = () => cy.get('body');
    getOkButtonSaveView = () => cy.get('button[name="Submit"]');
    getRecurseCheckbox = () => cy.get('#recurse~.attach-previous');
    getJobCheckbox = (jobName) => cy.get(`span.jenkins-checkbox label[title="${jobName}"]`);

    clickOkButtonSaveView() {
        this.getBodyViewEditPage().then(($body) => {
            if ($body.find(viewEditData.okButtonSaveViewLocator).length > 0)
                this.getOkButtonSaveView().click();
        });
        return new ViewPage();
    }

    checkRecurseCheckbox() {
        this.getRecurseCheckbox().click();
        return this;
    }

    checkJobCheckbox(jobName) {
        this.getJobCheckbox(jobName).click();
        return this;
    }
}
export default ViewEditPage;