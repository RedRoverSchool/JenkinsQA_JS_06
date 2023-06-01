import FreestyleProjectConfigPage from "./FreestyleProjectConfigPage";


class NewItemPage {

    getHeaderFormLabel = () => cy.get('form#createItem .header .add-item-name label');
    getInputField = () => cy.get('.add-item-name input#name');
    getInputNameRequiredMsg = () => cy.get('.add-item-name #itemname-required');
    getTypeProjectFPLabel = () => cy.get('li.hudson_model_FreeStyleProject span');
    getOKBtn = () => cy.get('#ok-button')



    typeProjectName(name) {
        this.getInputField().type(name);
        return this;
    }

    clickTypeProjectFP() {
        this.getTypeProjectFPLabel().click()
        return this;
    }

    clickOKBtnGoToConfigPage() {
        this.getOKBtn().click();
        return new FreestyleProjectConfigPage();
    }
}
export default NewItemPage;