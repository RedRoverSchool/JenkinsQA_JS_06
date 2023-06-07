/// <reference types="cypress" />

import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import dashboardBreadcrumbsData from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";

describe('dashboardBreadcrumbs', () => {

   const dashboardBreadcrumbs = new DashboardBreadcrumbs();

   it('AT_04.02.012 Verify Dashboard Dropdown Menu Length', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList()
         .should('be.visible')
         .and('have.length', dashboardBreadcrumbsData.dashboardDropdownMenu.length);
   });

   it('AT_04.02_003 | Verify Dashboard Dropdown menu has subfolders of the Dashboard page', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList().each(($el, idx) => {
            expect($el.text()).contain(dashboardBreadcrumbsData.dashboardDropdownMenu[idx]);
         });
   });

   it('AT_04.02.004 | Clicking on the dropdown menu "New Item" should navigate to the corresponding folder page', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .clickDashboardNewItemLink()
         .getNewItemHeader()
         .should('have.text', newItemPageData.newItemHeader);

      cy.url().should('include', newItemPageData.newItemEndPoinURL);
   })

   it('AT_04.02_002 |Dashbord has a dropdown menu', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropDownMenuList().should('be.visible').and('have.length', dashboardBreadcrumbsData.dashboardDropdownMenu.length)
         .each((el, index) => {
            expect(el.text()).to.equal(dashboardBreadcrumbsData.dashboardDropdownMenu[index])
         })
   });
})

