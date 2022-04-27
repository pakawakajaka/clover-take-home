class SearchPage {
  searchInput(input) {
    cy.get('input[title=Search]').type(`${input}{enter}`)
  }
}
export default SearchPage
