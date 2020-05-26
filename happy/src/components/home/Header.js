import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(

    //if form is blank, return
    <div>
    <h2>hello [{props.user.name}]</h2>
      <h3>how are you today?</h3>
      

    </div>
  );


//if form is not blank, return:
  // return(

  //   <div>
  //   <h2>hello {this.state.name}</h2>
  //   <h3>how are you today?</h3>
  //   </div>
  // );
}
export default Header;
