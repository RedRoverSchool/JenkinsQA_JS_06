import PipelineProjectPage from "../pageObjects/PipelineProjectPage"


class PipelineConfigPage {

    getFormHeader = () => cy.get('form[name="config"] h2');
    getDescriptionTextarea = () => cy.get('textarea[name="description"]');
    getSubmitBtn = () => cy.get('div>button[name="Submit"]')



    typeDescriptionToProject(text) {
        this.getDescriptionTextarea().type(text)
        return this;
    }

    clickSubmitBtnGoPipelineProjectPage() {
        this.getSubmitBtn().click();
        return new PipelineProjectPage();
    }
















}
export default PipelineConfigPage;