

class PipelineProjectPage {

    getPageHeader = () => cy.get('#main-panel h1');
    getDescriptionLink = () => cy.get('#description-link');
    getDescriptionTextarea = () => cy.get('textarea[name="description"]')
    getDescriptionText = () => cy.get('#description>div:first-child');
    getSaveDescriptionBtn = () => cy.get('#description button[name="Submit"]')




    clickDescriptionBtn() {
        this.getDescriptionLink().click()
        return this;
    }

    typeDescriptionText(text) {
        this.getDescriptionTextarea().type(text)
        return this;
    }

    clearText() {
        this.getDescriptionTextarea().clear()
        return this;
    }

    trimDescriptionText() {
        return this.getDescriptionText().then($el => {
            return $el.text().trim()
        })
    }

    clickSaveDescriptionBtn() {
        this.getSaveDescriptionBtn().click();
        return this;
    }
}
export default PipelineProjectPage;