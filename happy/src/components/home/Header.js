import React from 'react';

const Header = (props) => {
  return(
    <div>
       <h2>Hello {props.user.name}</h2>
    </div>
  );
}
export default Header;
