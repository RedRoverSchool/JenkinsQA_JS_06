import NewItemProjectPage from "./NewItemProjectPage";

class NewItemConfigurePage {

    getFormHeader = () => cy.get('form[name="config"] h2');
    getDescriptionTextarea = () => cy.get('textarea[name="description"]');
    getSubmitBtn = () => cy.get('button[name="Submit"]')
    


    typeDescriptionToProject(text){
        this.getDescriptionTextarea().type(text)
        return this;
    }
    
    clickSubmitBtn(){
        this.getSubmitBtn().click();
        return new NewItemProjectPage();
    }
















}
export default NewItemConfigurePage;