import MultibranchPipelineConfigurePage from "./MultibranchPipelineConfigurePage";

class MultibranchPipelinePage {
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getMultibranchPipelineTitle = () => cy.get('[class="icon-folder icon-xlg"]');
    getMultibranchPiplineWarning = () => cy.get('#enable-project');
    getEnableButton = () => cy.get('button[formnovalidate]');

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new MultibranchPipelineConfigurePage();
    };

    // readMultibranchPiplineDisabledText() {
    //     return this.getMultibranchPiplineWarning().should('be.visible').then(function (element) {
    //       const text = element.text().trim();
    //       return text;
    //     });
    //   }
      trimMultibranchPiplineDisabledText() {
        return this.getMultibranchPiplineWarning().then($el => {
          return $el.text().trim();
        });
      }
      
    // readMultibranchPiplineDisabledText() {
    //     return this.getMultibranchPiplineWarning().then(function (text) {
    //       const trimmedText = typeof text === 'string' ? text.trim() : '';
    //       return trimmedText;
    //     });
    //   }
      
      
    
    
      

    readMultibranchPiplineEnbleButtonText() {
        return this.getEnableButton().invoke('text');
    }
}

  

export default MultibranchPipelinePage;
