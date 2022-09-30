import React from 'react'
import './Sidebar.css'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditable: false,
    }
  }
  render() {
    const { profile } = this.props
    return (
      <div className='Sidebar'>
        <img className='Sidebar__img' src={profile.avatar} alt="user profile" />
        <p className='Sidebar__name'>{profile.name}</p>
        <p className='Sidebar__city'>{profile.city}, {profile.country}</p>
        <p className='Sidebar__address'>{profile.address}</p>
        <p>Email: {profile.contact.email}</p>
        <p>Phone: {profile.contact.phone}</p>
      </div>
    )
  }
}

export default Sidebar
