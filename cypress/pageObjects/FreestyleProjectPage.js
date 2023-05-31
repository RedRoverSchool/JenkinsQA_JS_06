import HomePage from "./HomePage";
import Header from "../pageObjects/Header";

class FreestyleProjectPage extends Header {

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

    clickLogoIcon() {
        this.getLogoIcon().click();
        return new HomePage();
    }
}
export default FreestyleProjectPage;