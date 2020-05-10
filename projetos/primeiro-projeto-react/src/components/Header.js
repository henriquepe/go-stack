import React from 'react';

function Header({title, children}) {
  return (
  <div id="header">
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  </div>
  
  )
  
}

export default Header;