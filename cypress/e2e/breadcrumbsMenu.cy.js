/// <reference types="cypress" />

import homePage from "../fixtures/homePage.json";
import headers from "../fixtures/headers.json";
import pages from "../fixtures/pages.json"
describe('BreadcrumbsMenu', () => {

   it('AT_04.02_001 |Dashboard is displayed on every page and user is able to go back to Home page', () => {
      pages.dashboardMenu.forEach(page => {
         cy.contains(page).click()
         cy.get('#breadcrumbs li>a').first().should('have.text', 'Dashboard').and('be.visible')
         cy.get('.jenkins-breadcrumbs__list-item a[href="/"]').click()
         cy.get('div[class="empty-state-block"] h1').should('have.text', pages.greeting)
      })
   })

   it('AT_04.02_002 |Dashbord has a dropdown menu', () => {
      cy.get('.jenkins-breadcrumbs__list-item button[class="jenkins-menu-dropdown-chevron"]').realHover().realClick()
      cy.get('#breadcrumb-menu > div.bd > ul>li>a>span').should('be.visible').and('have.length', pages.dashboardMenu.length)
         .each((el, index) => {
            expect(el.text()).to.equal(pages.dashboardMenu[index])
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

   it('AT_04.02.004 | <Breadcrumbs> Dashboard page link > Clicking on the dropdown menu "New Item" should navigate to the corresponding folder page', () => {

      cy.get('.jenkins-breadcrumbs__list-item [href="/"]').realHover();
      cy.get('[href="/"] .jenkins-menu-dropdown-chevron').click();
      cy.get('#breadcrumb-menu>.bd>ul>li:nth-child(1)').should('contain', homePage.dashboardDropdownItems[0]).click();

      cy.url().should('include', homePage.endPointUrl[0]);
      cy.get('.header .h3').should('have.text', headers.newItemHeader);
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

   it('AT_04.02_007 | Verify Dashboard dropdown menu content', () => {
      cy.get('#breadcrumbBar').contains('Dashboard').realHover()
      cy.get('#breadcrumbs li:first-child .jenkins-menu-dropdown-chevron').click()
      cy.get('#breadcrumb-menu>.bd>ul>li > .yuimenuitemlabel span').each(($el, idx) => {
         expect($el.text()).to.be.equal(homePage.dashboardDropdownItems[idx])
      })
   })

   it('AT_04.02.009 |Breadcrumbs| Dashboard page link check Manage Jenkins dropdown subfolder', () => {
      cy.get('#breadcrumbs .jenkins-menu-dropdown-chevron').realHover().realClick();
      cy.get('#breadcrumb-menu .first-of-type:nth-of-type(1)').contains(homePage.dashboardDropdownItems[3]).trigger('mouseover');
      homePage.manageJenkinsDropdownItems.forEach(item => {
         cy.contains('#submenu0', item).should('be.visible');
       });
   });
   
})
