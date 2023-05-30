class NewItemProjectPage {

    getPageHeader = () => cy.get('#main-panel h1');
    getDescriptionLink = () => cy.get('#description-link');
    getDescriptionTextarea = () => cy.get('textarea[name="description"]')
    getDescriptionText = () => cy.get('#description div');
    getSubmitBtn = () => cy.get('#description button[name="Submit"]')




    clickDescriptionBtn() {
        this.getDescriptionLink().click()
        return this;
    }

    typeDescriptionText(text) {
        this.getDescriptionTextarea().type(text)
        return this;
    }

    clickSubmitBtn() {
        this.getSubmitBtn().click();
        return this;
    }
    


    
















}
export default NewItemProjectPage;