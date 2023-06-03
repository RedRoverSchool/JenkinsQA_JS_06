/// <reference types="cypress" />

import DashboardBradcrumbs from "../../pageObjects/DashboardBradcrumbs";
import { dashboardDropdownMenu } from "../../fixtures/pom_fixtures/dashboardBradcrumbs.json";

describe('dashboardBradcrumbs', () => {

   const dashboardBradcrumbs = new DashboardBradcrumbs();

   it('AT_04.02.012 Verify Dashboard Dropdown Menu Length', () => {
      dashboardBradcrumbs
         .clickDashboardDropdownBtn()
         .getDashboardDropdownMenuItems()
         .should('have.length', dashboardDropdownMenu.length);
   });
})
