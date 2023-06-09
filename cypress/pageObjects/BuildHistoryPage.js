import BuildPage from "./BuildPage";

class BuildHistoryPage {
    getBuildHistoryPageUrl = () => cy.url();
    getBuildInBuildHistoryCalendar = () => cy.get('.timeline-event-label');
    getTimeFromBuildLabel = () => cy.get('.timeline-event-bubble-time');
    getBuildHistoryPageTitle = () => cy.get('.jenkins-app-bar__content>h1');
    getBuildLink = () => cy.get('.jenkins-table__badge');

    clickBuildInBuildHistoryCalendar() {
        this.getBuildInBuildHistoryCalendar().click();
        return this;
    }

    getTimeOfBuildCreatingFromCalendar() {
        return this.getTimeFromBuildLabel().then(($el) => {
            const timeArray = $el.toArray().map(el => el.innerText.split('\n'));
            const timeOnBuildHistoryCalendar = timeArray[0][0].slice(0,timeArray[0][0].length-3);
            return timeOnBuildHistoryCalendar;
        })
    }

    clickBuildLink() {
        this.getBuildLink().click();
        return new BuildPage;
    }

}

export default BuildHistoryPage;
