/// <reference types="cypress" />

import homePage from "../fixtures/homePage.json"
describe('Breadcrumbs',()=>{
    
  const pagesName =['New Item', 'People', 'Build History', 'Manage Jenkins', 'My Views']
  const endPointUrl = ['/all/newJob', '/asynchPeople/', '/builds' ,'/manage/', '/my-views/view/all/']
 
    it('AT_04.02_001 |Dashboard is displayed on every page and user is able to go back to Home page', ()=>{
   
             pagesName.forEach(page =>{
            cy.contains(page).click()
            cy.get('#breadcrumbs li>a').first().should('have.text', 'Dashboard').and('be.visible')
            cy.get('.jenkins-breadcrumbs__list-item a[href="/"]').click()
            cy.get('div[class="empty-state-block"] h1').should('have.text', 'Welcome to Jenkins!')
         })
       })

       it('AT_04.02_002 |Dashbord has a dropdown menu and  it is clickable', () => {
        
        cy.get('.jenkins-breadcrumbs__list-item button[class="jenkins-menu-dropdown-chevron"]').realHover().realClick()
        cy.get('#breadcrumb-menu > div.bd > ul>li>a>span').should('be.visible').and('have.length', 5)
           .each((el, index) => {
              expect(el.text()).to.equal(pagesName[index])
           })
  
        pagesName.forEach((page ,index) => {
           cy.contains(page).click()
           cy.url().should('include', endPointUrl[index])
           cy.go('back')
        })
     })

   it('AT_04.02_003 | <Breadcrumbs> Dashboard page link > Dropdown menu has subfolders of the Dashboard page', () => {
      
      cy.get('.jenkins-breadcrumbs__list-item [href="/"]').realHover();
      cy.get('[href="/"] .jenkins-menu-dropdown-chevron').should('be.visible').click();

      cy.get('#breadcrumb-menu>.bd>ul>li').should('be.visible')
         .and('have.length', homePage.dashboardDropdownItems.length);
      cy.get('#breadcrumb-menu>.bd>ul>li').each(($el, idx) => {        
         expect($el.text()).contain(homePage.dashboardDropdownItems[idx]);
      })
   })
   
   it('AT_04.02.004 | <Breadcrumbs> Dashboard page link > Clicking on the dropdown menu items should navigate to the corresponding folder page', () => {
      function clickBreadcrumbsDropdownItems(idx) {          
            cy.get('.jenkins-breadcrumbs__list-item [href="/"]').realHover();
            cy.get('[href="/"] .jenkins-menu-dropdown-chevron').click();
            cy.get(`#breadcrumb-menu>.bd>ul>li:nth-child(${idx})`).click();           
      }

      let idx = 1  
      while(idx <= homePage.endPointUrl.length)  {
         clickBreadcrumbsDropdownItems(idx);
         cy.url().should('include', homePage.endPointUrl[idx - 1]);
         idx++;
      }           
   })

   it('AT_04.02_005 | Verify Dashboard is visible in the breadcrumb on every page and user can return to the main page.', () => {
      
      cy.get('.jenkins-breadcrumbs__list-item').contains('Dashboard').should('be.visible')
      cy.get('.jenkins-breadcrumbs__list-item').click()
      cy.get('.empty-state-block h1').should('have.text', 'Welcome to Jenkins!')
      
        homePage.sidePanelItems.forEach(item => {
        cy.contains(item).click()
        cy.go('back')
        })
   })
})