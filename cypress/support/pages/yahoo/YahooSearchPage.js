import SearchPage from '../SearchPage'

class YahooSearchPage extends SearchPage {
  constructor() {
    super()
    this.searchElementLocator = 'input._yb_luwfs'
    this.url = 'https://www.yahoo.com'
  }
}
export default YahooSearchPage
