import React from 'react'
import './Content.css'
import Sidebar from './Sidebar'
import UserCV from './UserCV'

class Content extends React.Component {
  render() {
    const { user, updateState, updateSection, deleteEntry, setProfile } = this.props
    return (
      <div className='Content'>
        <Sidebar
          profile={user.profile}
          setProfile={setProfile}
        />
        <UserCV
          aim={user.aim}
          experience={user.experience}
          education={user.education}
          updateState={updateState}
          updateSection={updateSection}
          deleteEntry={deleteEntry}
        />
      </div>
    )
  }
}

export default Content
