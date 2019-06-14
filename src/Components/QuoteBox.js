import React,{Component} from 'react';
import QuoteDisplay from './QuoteDisplay';



const axios = require('axios');

class QuoteBox extends Component {
  constructor(props) {
    super(props);
   this.state = {
    author: '',
    quote: ''

  };
}

  componentDidMount = () => {
  this.getQuote()
  }

  getQuote = () => {

  axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
  .then(response => {
      let data = response.data.quotes
      let newQuote = Math.floor(Math.random() * data.length)
      let generateQuotes = data[newQuote]

      this.setState({
        quote: generateQuotes['quote'],
        author: generateQuotes['author']
      })
    })
  }

   generateQuote = () => {
    this.getQuote()
  }

  render() {
    const {quote,author} = this.state;
    return (
      <div >
      <QuoteDisplay quote={quote} author={author} onClick={this.generateQuote}/>

      </div>

    )}
}
export default QuoteBox ;
