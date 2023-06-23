/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import {distributedBuildsLinkPageUrl} from "../../fixtures/pom_fixtures/distributedBuildsLinkPageData.json"

describe ('distributedBuildsLink', () => {
    const homePage = new HomePage();
  
  it ('AT_02.05.09 | Verify Link Learn more about distributed builds is redirected to the new window', () => {
    
    homePage
    .clickLearnMoreAboutDistributedBuildsLink()
    .getDistributedBuildsLinkPageUrl().should('contain', distributedBuildsLinkPageUrl)
  })
})  
