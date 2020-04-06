import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <h1 style={headerStyle}>Modo App</h1>
    )
  }
}

const headerStyle = {
  background: '#660066',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default Header;
