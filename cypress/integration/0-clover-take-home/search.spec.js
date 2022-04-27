import SearchPage from '../../support/pages/google/SearchPage.js'
import ResultsPage from '../../support/pages/google/ResultsPage.js'

describe('Google Search', () => {
  const url = 'https://www.google.com'
  const searchPage = new SearchPage()
  const resultsPage = new ResultsPage()

  beforeEach(() => {
    cy.visit(url)
  })

  it('When a term is searched it should be in the first result', () => {
    const input = 'clover'
    const index = 0

    searchPage.searchInput(input)

    const result = resultsPage.getResult(index)

    result.contains(input, { matchCase: false })
  })
})
