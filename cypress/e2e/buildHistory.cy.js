/// <reference types="cypress"/>

import projects from '../fixtures/projects.json';

describe('buildHistory', () => {

    it('AT_07.01 _001| Build History|Build History link is clickable', () => {
        cy.get('[href="/view/all/builds"]').click();
        cy.get('.jenkins-app-bar__content>h1').should('have.text', 'Build History of Jenkins');
    });

    it('AT_07.01_002| Build History Verify Build History link is clickable', () =>{
        cy.get('a[href="/view/all/builds"').click()
        cy.get('.jenkins-app-bar__content').should('have.text', 'Build History of Jenkins')
    });

    it('AT_07.01_003|<Build History> Verify date when the build was created is visible', () => {
    
        cy.get('#side-panel [href$="newJob"]').click();
        cy.get('.jenkins-input').type('project1')
        cy.get("li[class='hudson_model_FreeStyleProject']").click()
        cy.get("#ok-button").click()
        cy.get("button[name='Submit']").click()
        cy.get('.model-link').contains('Dashboard').click()
        cy.get('#job_project1').should('be.visible')
        cy.get('#job_project1 > :nth-child(7)').click()
        cy.get('[href="/view/all/builds"').click();
        cy.get('.jenkins-app-bar__content').should('have.text', 'Build History of Jenkins');
        cy.get('.label-event-blue').click();
        cy.get('.timeline-event-bubble-time').should('be.visible')
    });

    it.skip('AT_07.01_005 | Build History > Verify user can see date and time of build creating in build history calendar', function() {
        function currentDateAndTime() {
            const date = new Date();
            const currentDateAndTime = date.toLocaleString('en-GB', {weekday: 'short', 
                                                                     day: 'numeric', 
                                                                     month: 'short', 
                                                                     year: 'numeric', 
                                                                     hour: 'numeric', 
                                                                     minute: 'numeric', 
                                                                     second: 'numeric'});
            return currentDateAndTime.replace(/,([^,]*)$/, '' + '$1');
        };

        cy.get('[href="/view/all/newJob"]').click();
        cy.get('.jenkins-input').type(projects.newProject);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();

        cy.get('.jenkins-breadcrumbs__list-item:first-child').click();
        cy.get(`[tooltip="Schedule a Build for ${projects.newProject}"]`)
            .click()
            .then(() => {
                const timeBuildCreating = currentDateAndTime();

                cy.get('[href="/view/all/builds"]').click();
                cy.get('.timeline-event-label').contains(projects.newProject).click();
            
                cy.get('.timeline-event-bubble-time').then(($el) => {
                    const timeArray = $el.toArray().map(el => el.innerText.split('\n'));
                    const timeOnBuildHistoryCalendar = timeArray[0][0];

                    expect(timeOnBuildHistoryCalendar).to.eq(timeBuildCreating);
                });
            });
    });
})
