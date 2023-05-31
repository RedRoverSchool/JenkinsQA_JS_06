import NewItemPage from "./NewItemPage";
import FreestyleProjectPage from "./FreestyleProjectPage";
import Header from "./Header";

class HomePage extends Header {

    getNewItemMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getNewItemMenuName = () => cy.get('a[href="/view/all/newJob"] span.task-link-text');
    getProjectsTable = () => cy.get('table#projectstatus');
    getCreatedProjectLink = () => cy.get('table#projectstatus tbody tr td a[href*="job"].jenkins-table__link');
    getCreatedProjectName = () => cy.get('table#projectstatus tbody tr td a[href*="job"].jenkins-table__link span');
    getCreatedProjectMenuBtn = () => cy.get('table#projectstatus tbody tr td a[href*="job"].jenkins-table__link button');



    clickNewItemMenuLink() {
        this.getNewItemMenuLink().click();
        return new NewItemPage();
    }

    clickCreatedProjectLink() {
        this.getCreatedProjectLink().click({ force: true })
        return new FreestyleProjectPage();
    }

    clickLogoIcon() {
        this.getLogoIcon().click();
        return this;
    }
}
export default HomePage;