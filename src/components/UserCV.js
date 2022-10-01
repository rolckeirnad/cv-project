import React from "react";
import ProfessionalAimForm from "./ProfessionalAimForm";
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
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(section) {
    this.setState((state) => {
      return {
        edit: {
          ...state.edit,
          [section]: !state.edit[section],
        }
      }
    })
  }

  render() {
    const { aim, experience, education, updateState } = this.props
    const { edit } = this.state
    return (
      <div className="UserCV">
        {edit.aim === false ?
          <div className="UserCV__card UserCV__aim" onClick={(e) => this.toggleEdit('aim')}>
            <p className="UserCV__card__title">Professional Aim</p>
            <div className="UserCV__card--position">
              <p className="UserCV__aim__text--light UserCV__aim__text--offset-up">Title</p>
              <p className="UserCV__aim__text--title UserCV__aim__text--offset-up">{aim.title}</p>
              <p className="UserCV__aim__text--p">{aim.description}</p>
            </div>
          </div> :
          <ProfessionalAimForm aim={aim} toggle={this.toggleEdit} updateState={updateState} />}
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
