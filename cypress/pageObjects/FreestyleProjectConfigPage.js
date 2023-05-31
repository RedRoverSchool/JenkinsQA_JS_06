import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigPage {

    getFormHeader = () => cy.get('form[name="config"] h2');
    getDescriptionTextarea = () => cy.get('textarea[name="description"]');
    getSubmitBtn = () => cy.get('button[name="Submit"]')
    


    typeDescriptionToProject(text){
        this.getDescriptionTextarea().type(text)
        return this;
    }
    
    clickSubmitProjectBtn(){
        this.getSubmitBtn().click();
        return new FreestyleProjectPage();
    }
















}
export default FreestyleProjectConfigPage;