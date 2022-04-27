import SearchPage from '../../support/pages/google/SearchPage.js'
import ResultsPage from '../../support/pages/google/ResultsPage.js'

describe('Google Search', () => {
  const input = 'clover'
  const index = 0

  context('using Page Objects', () => {
    const url = 'https://www.google.com'
    const searchPage = new SearchPage()
    const resultsPage = new ResultsPage()
    beforeEach(() => {
      cy.visit(url)
    })

    it('When a term is searched it should be in the first result', () => {
      searchPage.searchInput(input)

      const result = resultsPage.getResult(index)

      result.contains(input, { matchCase: false })
    })
  })

  context('using Cypress Commands', () => {
    it('When a term is searched it should be in the first result', () => {
      cy.googleSearch(input)

      const result = cy.googleFindResult(index)

      result.contains(input, { matchCase: false })
    })
  })
})
