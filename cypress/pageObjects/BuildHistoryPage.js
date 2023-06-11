import BuildPage from "./BuildPage";
import IconLegends from "./IconLegendsPage.js";

class BuildHistoryPage {
    getBuildHistoryPageUrl = () => cy.url();
    getBuildInBuildHistoryCalendar = () => cy.get('.timeline-event-label');
    getTimeFromBuildLabel = () => cy.get('.timeline-event-bubble-time');
    getBuildHistoryPageTitle = () => cy.get('.jenkins-app-bar__content>h1');
    getBuildLink = () => cy.get('.jenkins-table__badge');
    getIconLegendsButton = () => cy.get('#rss-bar a[href *= "legend"]');
    getProjectStatusTable = () => cy.get('table#projectStatus')
    getProjectStatusTableHeaderElements = () => cy.get('thead th')
    getProjectStatusTableRows = () => cy.get('tbody tr')
    getProjectStatusTableRowElements = () =>  cy.get('table#projectStatus tbody tr td')
    getSortHeaderBuild = () => cy.get('#projectStatus thead th:nth-child(2) .sortheader')
    getScheduleBuildBtn = () => cy.get('a[tooltip*="Schedule a Build"]')

    clickBuildInBuildHistoryCalendar() {
        this.getBuildInBuildHistoryCalendar().click();
        return this;
    }

    getTimeOfBuildCreatingFromCalendar() {
        return this.getTimeFromBuildLabel().then(($el) => {
            const timeArray = $el.toArray().map(el => el.innerText.split('\n'));
            const timeOnBuildHistoryCalendar = timeArray[0][0].slice(0, timeArray[0][0].length - 3);
            return timeOnBuildHistoryCalendar;
        })
    }

    clickBuildLink() {
        this.getBuildLink().click();
        return new BuildPage;
    }

    clickIconLegendsButton() {
        this.getIconLegendsButton().click();
        return new IconLegends();
    }

    createProjectStatusTable() {
        let keyArrayTableHeader = []
        let tableDataArr = []
        this.getProjectStatusTable().within(() => {
            this.getProjectStatusTableHeaderElements().then(($els) => {
                keyArrayTableHeader = Cypress.$.makeArray($els).map($el => $el.innerText.replace(/\W/g,''))
            })
            this.getProjectStatusTableRows().each((_, row) => {
                this.getProjectStatusTableRows().eq(row).find('td').then(($els) => {
                    let tableData = Cypress.$.makeArray($els).map($el => $el.innerText)
                    let tempObj = tableData.reduce((obj, el, idx) => {
                        return { ...obj, [keyArrayTableHeader[idx]]: el }
                    }, {})
                    tableDataArr.push(tempObj)
                })   
            })
        })
        return cy.wrap (tableDataArr)
    };
    
    clickSortHeaderBuild() {
        this.getSortHeaderBuild().click()
        return this
    };
}

export default BuildHistoryPage;
