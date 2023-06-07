import MultibranchPipelineRenamePage from "./MultibranchPipelineRenamePage";

class MultibranchPipelineStatusPage{
    getMultibranchPipeRenameSideMenuLink = () => cy.get('#tasks a[href*="/confirm-rename"]');

    clickMultibranchPipeRenameSideMenuLink() {
        this.getMultibranchPipeRenameSideMenuLink().click();
        return new MultibranchPipelineRenamePage();
    };
}
export default MultibranchPipelineStatusPage;