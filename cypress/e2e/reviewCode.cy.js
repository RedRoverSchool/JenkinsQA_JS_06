/// <reference types='cypress'/>

describe('DemoQA Menu-titles', () => {
  const itemForSearch = 'Item #25';

  it('Filling out Practice Form: dropdown State', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#state').click();
    cy.get('[id^=react-select-3-option]')
      .then(($els) => {
        const item = Cypress.$.makeArray($els).filter(
          ($el) => $el.innerText == 'Rajasthan'
        );
        return cy.wrap(item);
      })
      .click({ force: true });
  });

  it('Testing Virtual Scroll Dropdown', () => {
    function searchForOption(item, level = 0) {
      if (level > 30) {
        throw new Error('Exceeded max recursion level');
      }
      cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown-label').then(($el) => {
        const activeOption = $el.text();
        if (activeOption != item) {
          cy.wrap($el).type('{downarrow}');
          searchForOption(item, ++level);
        }
        cy.wrap($el).click();
      });
    }

    cy.visit('https://primereact.org/dropdown/');
    cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown').click();
    searchForOption(itemForSearch);
    cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown-label').should(
      'have.text',
      itemForSearch
    );
  });
});
