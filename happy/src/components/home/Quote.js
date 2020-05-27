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
          <h2>{quote.text}</h2>
          <h4>(Anonymous)</h4>
          </>)
      return (
        <div className="quote">
          <h2>{quote.text}</h2>
          <h4>({quote.author})</h4>
        </div>
        
        );
      })
      const quoteOfTheDay = allQuotes[Math.floor(Math.random() * allQuotes.length)];
      return (
       <>
       <h2>Quote of the day</h2>
         <h3> {quoteOfTheDay} </h3>
       </>
      )
  }
}

export default Quote;