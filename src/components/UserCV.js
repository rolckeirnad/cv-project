import React from "react";
import './UserCV.css'

class UserCV extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: {
        aim: false,
        experience: false,
        education: false,
      }
    }
  }

  toggleEdit(e, section) {
    e.preventDefault()
    this.setState({
      edit: {
        ...this.state.edit,
        [section]: !this.state.edit[section],
      }
    })
  }

  render() {
    const { aim, experience, education } = this.props
    const { edit } = this.state
    return (
      <div className="UserCV">
        <div className="UserCV__card UserCV__aim">
            <p className="UserCV__card__title">Professional Aim</p>
            <div className="UserCV__card--position">
              <p className="UserCV__aim__text--light UserCV__aim__text--offset-up">Title</p>
              <p className="UserCV__aim__text--title UserCV__aim__text--offset-up">{aim.title}</p>
              <p className="UserCV__aim__text--p">{aim.description}</p>
            </div>
            </div>
        <div className="UserCV__card UserCV__experience">
          <p className="UserCV__card__title">Professional experience</p>
          {experience.map((work, index) => {
            return (
              <div className="UserCV__block" key={'work-' + index}>
                <p className="UserCV__aim__text--title">{work.position} at {work.name}</p>
                <p className="UserCV__aim__text--light UserCV__aim__text--offset-down">{work.from.start} - {work.from.end}</p>
                <p className="UserCV__aim__text--p">{work.tasks}</p>
              </div>
            )
          })}
        </div>
        <div className="UserCV__card UserCV__education">
          <p className="UserCV__card__title">Education</p>
          {education.map((school, index) => {
            return (
              <div className="UserCV__block" key={'school-' + index}>
                <p className="UserCV__aim__text--title">{school.name}</p>
                <p className="UserCV__aim__text--light UserCV__aim__text--offset-down">{school.from.start} - {school.from.end}</p>
                <p className="UserCV__aim__text--p">{school.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserCV
