import BuildStatusPage from "./BuildStatusPage";

class EditBuildInformationPage {
    getDisplayNameInputField = () => cy.get('input[name="displayName"]');
    getEditBuildInformationSaveBtn = () => cy.get('button[name="Submit"]');

    typeDisplayName(name){
        this.getDisplayNameInputField().clear().type(name);
        return this;
    };

    clickEditBuildInformationSaveBtn() {
        this.getEditBuildInformationSaveBtn().click();
        return new BuildStatusPage();
    };
}
export default EditBuildInformationPage;