import PeoplePage from "./PeoplePage";

class HomePage {
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');


    clickPeopleSideMenuLink() {
        this.getPeopleSideMenuLink().click();
        return new PeoplePage;
    };
}
export default HomePage;