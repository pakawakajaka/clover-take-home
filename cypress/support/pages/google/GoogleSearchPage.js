import SearchPage from '../SearchPage'

const url = 'https://www.google.com'

class GoogleSearchPage extends SearchPage {
  searchInput(input) {
    cy.get('input[title=Search]').type(`${input}{enter}`)
  }
  visit() {
    cy.visit(url)
  }
}
export default GoogleSearchPage
