import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getLeftSidePanelBuildStepsBtn = () => cy.get('button[data-section-id="build-steps"]')
    getAddBuildStepBtn = () => cy.get('button.hetero-list-add').contains('Add build step')
    getAddBuildStepMenuList = () => cy.get('.config-table .jenkins-section:nth-child(10) li [href]')
    getBuilderWindow = () => cy.get('.repeated-chunk[name="builder"]')
    getBuilderWindowHeader = () => cy.get('.repeated-chunk__header')
    
    clickSaveBtnAndGoFreestyleProject() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage();
    }; 
    clickLeftSidePanelBuildStepsBtn() {
        this.getLeftSidePanelBuildStepsBtn().click()
        return this
    };
    clickAddBuildStepBtn() {
        this.getAddBuildStepBtn().click()
        return this
    };
    selectBuildStepFromMenuListItem(idx) {
        this.getAddBuildStepMenuList().eq(idx).click()
        return this
    };
    checkBuilderExistAndVisible() {
        this.getBuilderWindow()
            .should('exist')
            .and('be.visible')
        return this    
    }
}

export default FreestyleProjectConfigurePage;