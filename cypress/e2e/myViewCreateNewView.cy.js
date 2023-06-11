import myView from "../fixtures/myView.json"

describe.skip('my view create new view', function () {
    beforeEach('create the job', function () {
        cy.get('a[href="newJob"]').click();
        cy.get('#name').type('First job');
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click()
        cy.get(':nth-child(1) > .model-link').click()
    })

    it.skip('AT 09.01.002 create new view', function () {
        cy.get('a[href="/me/my-views"]').click()
        cy.get('a[title="New View"]').click()
        cy.get('#name').type('first view');
        cy.get('[for="hudson.model.MyView"]').click()
        cy.get('#ok').click()
        cy.get('.tab.active').should('contain', 'first view')
    });

    it.skip('AT_09.01_003| Create new view via tab My Views', function () {

        cy.get('.task:nth-child(5)').click()
        cy.get('[title="New View"]').click()
        cy.get('#name').type('myFirstView')
        cy.get('.jenkins-radio__label[for="hudson.model.MyView"]').click()
        cy.get('#ok').should('be.enabled').click()
        cy.get('.tab:nth-child(2)').should('be.visible').contains('myFirstView')
    })

    it.skip('AT_09.01_006 | My Views Create new view', () => {
        cy.get('#side-panel a[href="/me/my-views"]').click();
        cy.get('#projectstatus-tabBar [href$=newView]').click();
        cy.location('pathname').should('contain','/my-views/newView');
        cy.get('.jenkins-form-item input#name').type(myView.nameMyView);
        cy.get('.jenkins-fieldset .jenkins-radio label[for$=MyView]').click();
        cy.get('#bottom-sticker button[name=Submit]').click();

        cy.get('.tabBar').should('contain', myView.nameMyView);
        cy.get('.tabBar [href$="MyTestView/"]').click();
        cy.get('.jenkins-breadcrumbs__list-item a[href$="MyTestView/"]').should('be.visible');

    })

    after('delete view', () => {
        cy.get('#side-panel [href=delete]').click();
        cy.get('#main-panel form[name=delete] button[name=Submit]').click();
    })
})
