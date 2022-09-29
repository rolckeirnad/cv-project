import React from 'react'
import './Content.css'

class Content extends React.Component {
  render() {
    return (
      <div className='Content'>Hello
        {/* User information: picture, name, country, address, contact: [phone, email] */}
        {/* Professional aim: Position title, Salary, Description */}
        {/* Work Experience: [{Company name, position title, tasks:title,description, date of work:start,end}] */}
        {/* Education: [{school name, title of study, date of study:start,end}] */}
      </div>
    )
  }
}

export default Content
