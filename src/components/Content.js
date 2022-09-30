import React from 'react'
import './Content.css'
import Sidebar from './Sidebar'

class Content extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div className='Content'>
        <Sidebar profile={user.profile} />
        {/* User information: picture, name, country, address, contact: [phone, email] */}
        {/* Professional aim: Position title, Salary, Description */}
        {/* Work Experience: [{Company name, position title, tasks:title,description, date of work:start,end}] */}
        {/* Education: [{school name, title of study, date of study:start,end}] */}
      </div>
    )
  }
}

export default Content
