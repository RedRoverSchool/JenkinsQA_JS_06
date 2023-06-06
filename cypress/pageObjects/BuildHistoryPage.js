class BuildHistoryPage {
    getBuildInBuildHistoryCalendar = () => cy.get('.timeline-event-label');
    getTimeFromBuildLabel = () => cy.get('.timeline-event-bubble-time');


    clickBuildInBuildHistoryCalendar() {
        this.getBuildInBuildHistoryCalendar().click();
        return this;
    }

    getTimeOfBuildCreatingFromCalendar() {
        return this.getTimeFromBuildLabel().then(($el) => {
            const timeArray = $el.toArray().map(el => el.innerText.split('\n'));
            const timeOnBuildHistoryCalendar = timeArray[0][0];
            return timeOnBuildHistoryCalendar;
        })
    }

}

export default BuildHistoryPage;