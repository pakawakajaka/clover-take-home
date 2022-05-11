import SearchPage from '../SearchPage'

class GoogleSearchPage extends SearchPage {
  constructor() {
    super()
    this.searchElementLocator = 'input[title=Search]'
    this.url = 'https://www.google.com'
  }
}
export default GoogleSearchPage
