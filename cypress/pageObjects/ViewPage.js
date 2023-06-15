import myView from "../fixtures/pom_fixtures/myView.json";

class ViewPage {

    getJobUrlsList = () => cy.get('#projectstatus tbody>tr>td:nth-child(3) a');
    getJobNamesList = () => cy.get('#projectstatus tbody>tr>td:nth-child(3) span');

    verifyJobAmountUrlsAndNames() {
        this.getJobUrlsList().should('have.length', 3)
            .each(($el, idx) => {
                const expectedUrl = myView.jobFilter[idx].url;
                expect($el).to.have.attr('href', expectedUrl);
            })
        this.getJobNamesList()
            .each(($el, idx) => {
                const expectedName = myView.jobFilter[idx].name;
                expect($el).to.have.text(expectedName);
            })
    }    
}
export default ViewPage;