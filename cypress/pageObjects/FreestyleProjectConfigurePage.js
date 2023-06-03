import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    
    clickSaveBtnAndGoFreestyleProjectPage() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage;
    };    
}

export default FreestyleProjectConfigurePage;