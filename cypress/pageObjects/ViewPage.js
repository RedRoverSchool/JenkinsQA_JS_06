import MyViewDeletePage from './MyViewDeletePage';

class ViewPage {
    getDeleteViewBtn = () => cy.get('#side-panel [href=delete]');
    getNameMyViewList = () => cy.get('.tabBar a');

    clickDeleteViewBtn() {
        this.getDeleteViewBtn().click();
        return new MyViewDeletePage();
    };
    
}
export default ViewPage;