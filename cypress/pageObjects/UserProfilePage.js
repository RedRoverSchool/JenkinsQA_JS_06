class UserProfilePage {
    getUserPageHeader = () => cy.get('#main-panel h1');


    trimUserPageHeaderName() {
        return this.getUserPageHeader().then($el => {
            return $el.text().trim();
        })
    }



}
export default UserProfilePage;