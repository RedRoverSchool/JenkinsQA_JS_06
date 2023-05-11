/// <reference types="cypress" />

describe('Breadcrumbs',()=>{

    it('Dashboard is displayed on every page and user is able to go back to Home page', ()=>{
   
        const pagesName =['New Item', 'People', 'Build History', 'Manage Jenkins', 'My Views']
        
         pagesName.forEach(page =>{
            cy.contains(page).click()
            cy.get('#breadcrumbs li>a').first().should('have.text', 'Dashboard').and('be.visible')
            cy.get('.jenkins-breadcrumbs__list-item a[href="/"]').click()
            cy.get('div[class="empty-state-block"] h1').should('have.text', 'Welcome to Jenkins!')
         })
       })
})