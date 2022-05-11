import ResultsPage from '../ResultsPage'

class GoogleResultsPage extends ResultsPage {
  getResult(index) {
    return cy.get('#search').find('a > h3').filter(':visible').eq(index)
  }
}
export default GoogleResultsPage
