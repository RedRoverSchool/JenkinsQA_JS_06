/// <reference types="cypress" />

import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import { dashboardDropdownMenu } from "../../fixtures/pom_fixtures/dashboardBreadcrumbs.json";

describe('dashboardBreadcrumbs', () => {

   const dashboardBreadcrumbs = new DashboardBreadcrumbs();

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


})
