
class MultiConfProjectConfirmRenamePage {
    getErrorMessage = () => cy.get('#main-panel h1');
    getCurrentNameMessage = () => cy.get('#main-panel p'); 
}
export default MultiConfProjectConfirmRenamePage;