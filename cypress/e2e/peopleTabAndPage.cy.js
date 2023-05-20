/// <reference types="cypress"/>

describe("People Tab and People page", () => {
  const endPointPeople = "/asynchPeople/";
  it("AT_6.01_001 | People tab and People page", () => {
    cy.get("a.task-link").eq(1).should("contain", "People").click();
    cy.url().should("contains", endPointPeople);
  });
  it('AT_6.01_004|Verify URL the user is being redirected to', () => {
    cy.get('a[href="/asynchPeople/"]').click()
    cy.url().should('contain', '/asynchPeople/')
  })

  it('AT_06.01_003 | People | Verify the "People" page', ()=>{
    cy.get('#side-panel #tasks :nth-child(2) .task-link-text').should('exist').and('have.text','People')
    cy.get('a[href="/asynchPeople/"]').click()
    cy.url().should('includes','/asynchPeople/')
  })
});
