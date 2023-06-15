class IconLegendsPage {
    getPageTopHeader = () => cy.get('#main-panel h1');
    getStatusGroupHeader = () => cy.get('#main-panel>h2:nth-child(3)');
    getStatusIconsGroup = () => cy.get('#main-panel > dl:nth-child(4) dt');
    getProjectHealthGroupHeader = () => cy.get('#main-panel>h2:nth-child(5)');
    getProjectHealthIconsGroup = () => cy.get('#main-panel > dl:nth-child(6) dt');
    getProjectHealthStatuses = () => cy.get('#main-panel > dl:nth-child(6)');
    getProjectHealthIcons = () => cy.get('.app-icon-legend dt>svg');
    getStatusIcons = () => cy.get('.app-icon-legend span>svg');
    
}

export default IconLegendsPage;