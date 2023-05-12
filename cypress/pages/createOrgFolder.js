class Folder {

  setItem() {
    return cy.contains("New Item");
  }
  setNameItem() {
    const folder = 'Test'
    return cy.get("#name").type(folder);
  }
  chooseItem() {
    return cy.contains("Organization Folder");
  }
  createItem() {
    return cy.get("#ok-button").should("be.visible");
  }
  applyCreateItem() {
    return cy.contains("Save");
  }

  createNewFolder() {

    this.setItem().click();
    this.setNameItem();
    this.chooseItem().click();
    this.createItem().click();
    this.applyCreateItem().click();
  }
}

export default Folder;




