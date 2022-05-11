class SearchPage {
  searchInput(input) {
    cy.get(this.searchElementLocator).type(`${input}{enter}`)
  }
  visit() {
    cy.visit(this.url)
  }
}
export default SearchPage
