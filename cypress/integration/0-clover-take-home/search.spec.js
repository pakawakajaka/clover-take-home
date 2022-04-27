describe('Google Search', () => {
    const url = 'https://www.google.com'

    beforeEach(() => {
        cy.visit(url)
    })

    it('When a term is searched it should be in the first result', () => {
        const input = 'clover' 
        const index = 0

        const search = cy.get('input[title=Search]')
		search.type(`${input}{enter}`)

        const results = cy.get('#search')
            .find('a > h3')
            .filter(':visible')
        
        results.eq(index).contains(input, { matchCase: false })
    })
})