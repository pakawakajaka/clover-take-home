import ResultsPage from '../ResultsPage'

class YahooResultsPage extends ResultsPage {
  getResult(index) {
    return cy
      .get('.searchCenterMiddle')
      .find('h3 > a')
      .filter(':visible')
      .eq(index)
  }
}
export default YahooResultsPage
