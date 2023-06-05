import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getDescriptionInputField = () => cy.get('textarea[name="description"]');
    
    clickSaveBtnAndGoFreestyleProject() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage();
    };
    
    typeDescriptionInputField(name) {
        this.getDescriptionInputField().clear().type(name);
        return this;
    };
}

export default FreestyleProjectConfigurePage;