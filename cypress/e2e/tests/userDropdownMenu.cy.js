/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import { userDropdownMenuItems } from "../../fixtures/pom_fixtures/headerAndFooter.json";

describe('userDropdownMenu', () => {

   const headerAndFooter = new HeaderAndFooter();

   it('verify User Icon has dropdown menu with given links', () => {
      headerAndFooter
         .clickUserDropdownChevronBtn()
         .getUserDropdownMenuItemList()
         .should('deep.equal', userDropdownMenuItems);
   });
})
