class ResultsPage {
  getResult(index) {
    return cy.get('#search').find('a > h3').filter(':visible').eq(index)
  }
}
export default ResultsPage
