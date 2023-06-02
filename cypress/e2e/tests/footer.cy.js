/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {restAPIPageTitle} from "../../fixtures/pom_fixtures/headerAndFooter.json"

describe('footer', () => {

    const headerAndFooter = new HeaderAndFooter();

    it('Verify link Rest Api redirected to the page with correct header', () => {
        headerAndFooter
        .clickLinkRestAPI()
        .getMainPanelTitle()
        .should('have.text',restAPIPageTitle)
    })
})