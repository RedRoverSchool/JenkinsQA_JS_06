/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { sidePanelItemsData } from "../../fixtures/pom_fixtures/sidePanelItemsData.json";

describe('homePage', () => {

  const homePage = new HomePage;

  it('AT_02.04_008 | Homepage > Verify 5 items from the sub-menu', () => {
    homePage
      .createSidePanelItemsList()
      .should('deep.equal', sidePanelItemsData)
  });
})

