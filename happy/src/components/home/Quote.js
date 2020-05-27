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
          <span>{quote.text}</span>
          <br></br>
          <br></br>
          <span>(Anonymous)</span>
          </>)
      return (
        <>
          <span>{quote.text}</span>
          <br></br>
          <br></br>
          <span>({quote.author})</span>
        </>
        );
      })
      const quoteOfTheDay = allQuotes[Math.floor(Math.random() * allQuotes.length)];
      return (
        <div className="quote">
          <h1>Quote of the day</h1>
          <h3> {quoteOfTheDay} </h3>
       </div>
      )
  }
}

export default Quote;