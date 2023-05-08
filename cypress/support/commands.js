// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const USER_NAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');

Cypress.Commands.add('cleanData', () => { 
  var sessionId;

    function getUrl() {
      return "http://localhost:8080/"
    }

    function getUserName() {
      return USER_NAME
    }

    function getPassword() {
      return PASSWORD
    }

    function getCrumbFromPage(page) {
      const CRUMB_TAG = 'data-crumb-value="';

      let crumbTagBeginIndex = page.indexOf(CRUMB_TAG) + CRUMB_TAG.length;
      let crumbTagEndIndex = page.indexOf('"', crumbTagBeginIndex);

      return page.substring(crumbTagBeginIndex, crumbTagEndIndex);
    }

    function getSubstringsFromPage(page, from, to, maxSubstringLength = 100) {
      let result = new Set();

      let index = page.indexOf(from);
      while (index != -1) {
        let endIndex = page.indexOf(to, index + from.length);

        if (endIndex != -1 && endIndex - index < maxSubstringLength) {
          result.add(page.substring(index + from.length, endIndex));
        } else {
          endIndex = index + from.length;
        }

        index = page.indexOf(from, endIndex);
      }

      return result;
    }

    function setHeader(request) {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      if (sessionId != null) {
        request.setRequestHeader('Cookie', sessionId);
      }
    }

    function sendHttp(url, type, body) {
      let http = new XMLHttpRequest();
      http.open(type, url, false);
      setHeader(http);
      http.send(body);

      return http;
    }

    function getHttp(url) {
      return sendHttp(url, 'GET', null);
    }

    function postHttp(url, body) {
      return sendHttp(url, 'POST', body);
    }

    function getPage(uri) {
      let page = getHttp(getUrl() + uri);
      if (page.status != 200) {
        const HEAD_COOKIE = 'set-cookie';

        let loginPage = getHttp(getUrl() + 'login?from=%2F');
        sessionId = loginPage.getResponseHeader(HEAD_COOKIE);

        let indexPage = postHttp(getUrl() + 'j_spring_security_check',
          'j_username=' + getUserName() + '&j_password=' + getPassword() + '&from=%2F&Submit=');
        sessionId = indexPage.getResponseHeader(HEAD_COOKIE);

        page = getHttp(getUrl() + uri);
      }
      
      if (page.status == 403) {
        //throw new RuntimeException(String.format("Authorization does not work with user: \"%s\" and password: \"%s\"", getUserName(), getPassword()));
      } else if (page.status != 200) {
        //throw new RuntimeException("Something went wrong while clearing data");
      }

      return page.responseText;
    }

    function deleteByLink(link, names, crumb) {
      let fullCrumb = `Jenkins-Crumb=${crumb}`;
      for (const name of names) {
        postHttp((getUrl() + link).replace('{name}', name), fullCrumb);
      }
    }

    function deleteJobs() {
      let mainPage = getPage('');
      deleteByLink('job/{name}/doDelete',
        getSubstringsFromPage(mainPage, 'href="job/', '/"'),
        getCrumbFromPage(mainPage));
    }

    function deleteViews() {
      let mainPage = getPage(''); 
      deleteByLink('view/{name}/doDelete',
        getSubstringsFromPage(mainPage, 'href="/view/', '/"'),
        getCrumbFromPage(mainPage));

      let viewPage = getPage('me/my-views/view/all/');
      deleteByLink('user/admin/my-views/view/{name}/doDelete',
        getSubstringsFromPage(viewPage, 'href="/user/admin/my-views/view/', '/"'),
        getCrumbFromPage(viewPage));
    }

    function deleteUsers() {
      let userPage = getPage('manage/securityRealm/');
      let users = getSubstringsFromPage(userPage, 'href="user', '/delete"');
      users.delete(getUserName());
      deleteByLink('manage/securityRealm/user/{name}/doDelete',
        users,
        getCrumbFromPage(userPage));
    }

    function deleteNodes() {
      let mainPage = getPage('');
      deleteByLink('computer/{name}/doDelete',
        getSubstringsFromPage(mainPage, 'href="/computer/', '/"'),
        getCrumbFromPage(mainPage));
    }

    function clearData() {
      deleteViews();
      deleteJobs();
      deleteUsers();
      deleteNodes();
    }

    clearData();
})
