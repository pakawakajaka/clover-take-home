import ResultsPage from '../ResultsPage'

class GoogleResultsPage extends ResultsPage {
  getResult(index) {
    return cy.get('#search').find('a > h3').filter(':visible').eq(index)
  }

  hello() {
    console.log('GoogleResultsPage')
  }
}
export default GoogleResultsPage
