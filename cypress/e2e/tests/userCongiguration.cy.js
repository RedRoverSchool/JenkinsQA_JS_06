/// <reference types="cypress" />

import Header from "../../pageObjects/Header";


describe('userCongiguration', () => {
    const header = new Header();

    it('verify user can rename username', () => {
        header
            .clickUserDropDownBtn()
            .selectUserConfigMenu()
            .typeFullNameInput('Maria')
            .clickSaveFullNameBtn()
            .getHeaderUserPage()
            .should('contain', 'Maria')
    })

    it('verify user can rename username', () => {  
        header
            .getUserNameLink()
            .should('contain', 'Maria')
    })

    it('verify user can rename username', () => {  
        header
            .clickUserNameLink()
            .getBreadcrumbUserName()
            .should('contain', 'Maria')
    })
})
