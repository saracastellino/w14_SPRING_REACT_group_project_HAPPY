import React from 'react';

const Header = (props) => {
  return(
    <div className="header-greeting">
        <h1 className="title">Happy!</h1>
        <h5>Your personal mood tracker</h5>
       <h2>Hello {props.user.name}</h2>
    </div>
  );
}
export default Header;
