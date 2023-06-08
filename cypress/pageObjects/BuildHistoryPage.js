import IconLegends from "./IconLegendsPage.js";

class BuildHistoryPage {
    getBuildInBuildHistoryCalendar = () => cy.get('.timeline-event-label');
    getTimeFromBuildLabel = () => cy.get('.timeline-event-bubble-time');
    getIconLegendsButton = () => cy.get('#rss-bar a[href *= "legend"]');


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

    clickIconLegendsButton() {
        this.getIconLegendsButton().click();
        return new IconLegends();
    }
}

export default BuildHistoryPage;