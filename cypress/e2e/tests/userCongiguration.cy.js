/// <reference types="cypress" />

import Header from "../../pageObjects/Header";


describe('userCongiguration', () => {
    const header = new Header();
    
    it('verify user can rename username and name is changed on user page', () => {
        header
            .clickUserDropDownBtn()
            .selectUserConfigMenu()
            .typeFullNameInput('Maria')
            .clickSaveFullNameBtn()
            .getHeaderUserPage()
            .should('contain', 'Maria')
    })

    it('verify user can rename username and name is changed on header', () => {  
        header
            .getUserNameLink()
            .should('contain', 'Maria')
    })

    it('verify user can rename username and name is changed on breadcrumbBar', () => {  
        header
            .clickUserNameLink()
            .getBreadcrumbUserName()
            .should('contain', 'Maria')
    })
})
