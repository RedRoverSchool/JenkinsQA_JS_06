import FreestyleProjectConfigPage from "./FreestyleProjectConfigPage";
import PipelineConfigPage from "../pageObjects/PipelineConfigPage";
import FolderConfigPage from "../pageObjects/FolderConfigPage";

class NewItemPage {

    getHeaderFormLabel = () => cy.get('form#createItem .header .add-item-name label');
    getInputField = () => cy.get('.add-item-name input#name');
    getInputNameRequiredMsg = () => cy.get('.add-item-name #itemname-required');
    getTypeProjectFPLabel = () => cy.get('li.hudson_model_FreeStyleProject span');
    getTypeProjectPPLabel = () => cy.get('#j-add-item-type-standalone-projects li:nth-child(2) label span');
    getTypeProjectLabel = () => cy.get('ul.j-item-options  li label span')
    getOKBtn = () => cy.get('#ok-button')



    typeProjectName(name) {
        this.getInputField().type(name);
        return this;
    }

    clickTypeProjectFP() {
        this.getTypeProjectFPLabel().click()
        return this;
    }

    clickTypeProjectPP() {
        this.getTypeProjectPPLabel().click()
        return this;
    }

    clickOKBtnGoToFPConfigPage() {
        this.getOKBtn().click();
        return new FreestyleProjectConfigPage();
    }

    clickOKBtnGoToPPConfigPage() {
        this.getOKBtn().click();
        return new PipelineConfigPage();
    }

    clickOKBtnGoToFolderConfigPage() {
        this.getOKBtn().click();
        return new FolderConfigPage();
    }

    clickTypeProject(type) {
        this.getTypeProjectLabel().contains(type).click()
        return this;
    }

}
export default NewItemPage;