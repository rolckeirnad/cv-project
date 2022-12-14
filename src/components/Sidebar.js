import React from 'react'
import './Sidebar.css'
import SidebarForm from './SidebarForm'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayForm: false,
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    this.setState({ displayForm: !this.state.displayForm })
  }

  render() {
    const { avatar, name, city, country, address, email, phone, links } = this.props.profile
    const { displayForm } = this.state
    return (
      <div className='Sidebar'>
        {displayForm === false ?
          <div className='Sidebar__userData' onClick={this.toggleForm}>
            <img className='Sidebar__img' src={avatar} alt='User profile' />
            <p className='Sidebar__name'>{name}</p>
            <p className='Sidebar__city'>{city !== '' ? `${city},` : ''} {country}</p>
            {address !== '' ? <p className='Sidebar__address'>{address}</p> : <></>}
            <p className='Sidebar__address'><i className="bi bi-envelope-fill" /> {email}</p>
            <p className='Sidebar__address'><i className="bi bi-telephone-fill" /> {phone}</p>
            <div className="Sidebar__links">
              {links && links.length > 0 ? links.map((link, index) => {
                return <p key={`link-${index}`}>{link}</p>
              }) : <></>}
            </div>
          </div> :
          <SidebarForm user={this.props.profile} cancel={this.toggleForm} setProfile={this.props.setProfile} />}
      </div>
    )
  }
}

export default Sidebar
