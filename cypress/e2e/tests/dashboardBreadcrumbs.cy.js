/// <reference types="cypress" />

import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import { dashboardDropdownMenu } from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";
import NewItemPage from "../../pageObjects/NewItemPage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";

describe('dashboardBreadcrumbs', () => {

   const dashboardBreadcrumbs = new DashboardBreadcrumbs();
   const newItemPage = new NewItemPage();

   it('AT_04.02.012 Verify Dashboard Dropdown Menu Length', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList()
         .should('be.visible')
         .and('have.length', dashboardDropdownMenu.length);
   });

   it('AT_04.02_003 | Verify Dashboard Dropdown menu has subfolders of the Dashboard page', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItemsList().each(($el, idx) => {
            expect($el.text()).contain(dashboardDropdownMenu[idx]);
         });
   });

   it('AT_04.02.004 | Clicking on the dropdown menu "New Item" should navigate to the corresponding folder page', () => {
      dashboardBreadcrumbs
         .clickDashboardDropdownBtn()
         .clickDashboardNewItemLink()
         .getNewItenHeader()
         .should('have.text', newItemPageData.newItemHeader);

      cy.url().should('include', newItemPageData.newItemEndPoinURL);   
   })


})
