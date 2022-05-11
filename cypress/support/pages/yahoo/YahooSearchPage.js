import SearchPage from '../SearchPage'

const url = 'https://www.yahoo.com'
const searchLocator = 'input._yb_luwfs'

class YahooSearchPage extends SearchPage {
  visit() {
    cy.visit(url)
  }

  searchInput(input) {
    cy.get('input._yb_luwfs').type(`${input}{enter}`)
}
}
export default YahooSearchPage
