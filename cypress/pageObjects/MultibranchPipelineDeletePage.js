import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import HomePage from "./HomePage";

class MultibranchPipelineDeletePage {
    getYesBtn = () => cy.get("button[name = 'Submit']");
    
    clickYesButton() {
        this.getYesBtn().click();
        return new HomePage;
    }
}
export default MultibranchPipelineDeletePage;