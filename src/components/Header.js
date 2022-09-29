import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <nav className='Header'>
        <p className='Header__Title'>CV Application</p>
        <button className='Header__Button Header__Button--red'>Reset</button>
      </nav>
    );
  }
}

export default Header;
