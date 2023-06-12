class MyViewDeletePage {
    getMyViewDeleteOkBtn = () => cy.get('#main-panel form[name=delete] button[name=Submit]');

    clickMyViewDeleteOkBtn() {
        this.getMyViewDeleteOkBtn().click();
        return this;
    }
}
export default MyViewDeletePage;