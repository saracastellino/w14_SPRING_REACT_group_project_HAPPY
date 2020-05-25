import React, {Component, Fragment} from 'react';

class Quote extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }
  }
  
  componentDidMount() {
    const url = 'https://type.fit/api/quotes';

    fetch(url)
      .then(res => res.json())
      .then(quotes => this.setState({ quotes: quotes }))
      .catch(err => console.error);
  }

  render(){
    const allQuotes = this.state.quotes.map(quote => {
      if (!quote.author) return (
          <>
          <p>{quote.text}</p>
          <h4>(Anonymous)</h4>
          </>)
      return (
          <>
          <p>{quote.text}</p>
          <h4>({quote.author})</h4>
          </>
        );
      })
      const quoteOfTheDay = allQuotes[Math.floor(Math.random() * allQuotes.length)];
      return (
       <>
         <h3> {quoteOfTheDay} </h3>
       </>
      )
  }
}

export default Quote;