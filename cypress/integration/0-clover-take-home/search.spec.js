import GoogleSearchPage from '../../support/pages/google/GoogleSearchPage.js'
import YahooSearchPage from '../../support/pages/yahoo/YahooSearchPage.js'
import GoogleResultsPage from '../../support/pages/google/GoogleResultsPage.js'
import YahooResultsPage from '../../support/pages/yahoo/YahooResultsPage.js'

const input = 'clover'
const index = 0

const searchEngines = [
  {
    resultsPage: new GoogleResultsPage(),
    searchPage: new GoogleSearchPage(),
    name: 'Google',
  },
  {
    resultsPage: new YahooResultsPage(),
    searchPage: new YahooSearchPage(),
    name: 'Yahoo',
  },
]


describe('Search', () => {

  searchEngines.forEach((searchEngine) => {
    it(
      'When a term is searched it should be in the first result ' +
        searchEngine.name,
      () => {
        searchEngine.searchPage.visit()

        searchEngine.searchPage.searchInput(input)

        const result = searchEngine.resultsPage.getResult(index)

        result.contains(input, { matchCase: false })
      }
    )
  })
})

describe('Google Search', () => {
  context('using Cypress Commands', () => {
    it('When a term is searched it should be in the first result', () => {
      cy.googleSearch(input)

      const result = cy.googleFindResult(index)

      result.contains(input, { matchCase: false })
    })

    it('When a term is not searched it should not be in the first result', () => {
      cy.googleSearch('rosebud')

      const result = cy.googleFindResult(index)

      result.should('not.contain', input)
    })

    it('When a term is searched it should be the first result on the second page', () => {
      cy.googleSearch(input)

      cy.googlePage(2)

      const result = cy.googleFindResult(index)

      result.contains(input, { matchCase: false })
    })
  })
})
