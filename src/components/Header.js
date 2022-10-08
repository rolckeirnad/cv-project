import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    const { reset } = this.props
    return (
      <nav className='Header'>
        <p className='Header__Title'>CV Application</p>
        <button className='Header__Button Header__Button--red' onClick={reset}>Reset</button>
      </nav>
    );
  }
}

export default Header;
