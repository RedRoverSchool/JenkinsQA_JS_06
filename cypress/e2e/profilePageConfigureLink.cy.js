/// <reference types="cypress"/>

const userName = Cypress.env("local.admin.username").toLowerCase();

describe ('profilePageConfigureLink', () => {

    it("AT_18.04_001 | Profile Page | Link to User's configure | Configure is displayed on User's profile page", () => {
        cy.get(`a[href="/user/${userName}"]>span`).click()
        cy.get(`a[href="/user/${userName}/configure"]`).should("be.visible")
        cy.get(`a[href="/user/${userName}/configure"] .task-link-text`).should("have.text", "Configure")
    })

    
    it("AT_18.04_002 | <Profile Page> | Link to User's configure | Configure is displayed on User's configure profile page", () => {
        cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get(`a[href="/user/${userName}/configure"]`).should("be.visible").click()       
        cy.get(`a[href="/user/${userName}/configure"] .task-link-text`).should("have.text", "Configure")
    })
})
