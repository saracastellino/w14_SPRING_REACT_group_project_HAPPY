import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <>
      <h1>Useful links</h1>
      <div className="quote">
            <h2><a rel="noopener" href="https://www.nhs.uk/conditions/stress-anxiety-depression/mental-health-helplines/#addiction-drugs-alcohol-gambling" target="_blank"><strong>NHS website</strong></a></h2>
            <h3>A list of useful webostes provided by the NHS.</h3>
            
            <h2><a rel="noopener" href="http://www.samaritans.org" target="_blank"><strong>Samaritans </strong></a></h2>
            <h3>Samaritans provide 24-hour online and phone support to people in distress. Call: 116 123.</h3>
            
            <h2><a rel="noopener" href="http://www.breathingspace.scot/" target="_blank"><strong>Breathing Space </strong></a></h2>
            <h3>Offers a free, confidential phone and web-based service for people in Scotland experiencing low mood, depression or anxiety.</h3>
            
            <h2><a rel="noopener" href="http://www.giveusashout.org" target="_blank"><strong>Shout</strong></a></h2>
            <h3>Text: 85258. Shout is volunteer-run and is the UK’s first 24/7 crises text service, free on all major mobile networks, for anyone in crisis anytime, anywhere.</h3>
            
            <h2><a rel="noopener" href="https://www.mentalhealth.org.uk" target="_blank"><strong>Mental Health Foundation.</strong></a></h2>
            <h3>Information and support for anyone with mental health problems or learning disabilities.</h3>
      </div>
     </>
    )
  }
}

export default Links;
