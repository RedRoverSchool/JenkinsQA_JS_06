/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import DistributedBuildsLinkPage from "../../pageObjects/DistributedBuildsLinkPage"
import {distributedBuildsLinkPageUrl} from "../../fixtures/pom_fixtures/distributedBuildsLinkPageData.json"

describe ('distributedBuildsLink', () => {
    const homePage = new HomePage();
    const distributedBuildsLinkPage = new DistributedBuildsLinkPage;
  
  it ('POM > AT_02.05.09 | Verify Link Learn more about distributed builds is redirected to the new window', () => {
    
    homePage
    .clickLearnMoreAboutDistributedBuildsLink()
    distributedBuildsLinkPage
    .getDistributedBuildsLinkPageUrl().should('contain', distributedBuildsLinkPageUrl)
   
  })
})  
