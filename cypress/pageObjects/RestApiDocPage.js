class RestApiDocPage {
getRestApiDocPageTitle =() => cy.get('h1#remote-access-api');
getRestApiDocPageItemsList = ()=> cy.get('.sect1')
}


export default RestApiDocPage