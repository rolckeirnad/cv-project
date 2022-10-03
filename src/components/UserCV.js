import React from "react";
import ProfessionalAimForm from "./ProfessionalAimForm";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm";
import './UserCV.css'

class UserCV extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: {
        aim: false,
        experience: false,
        education: false,
      },
      actualExperience: null,
      actualEducation: null,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(section, e = null) {
    this.setState((state) => {
      return {
        edit: {
          ...state.edit,
          [section]: !state.edit[section],
        },
      }
    })
    if (section !== 'aim' && e !== null) {
      const id = e.currentTarget.id
      const key = section === 'experience' ? 'Experience' : 'Education'
      if (id === "") {
        this.setState((state) => {
          return {
            ...state,
            [`actual${key}`]: null,
          }
        })
      } else {
        const arr = section === 'experience' ? this.props.experience : this.props.education
        const element = arr.find((entry) => entry.id === id)
        this.setState((state) => {
          return {
            ...state,
            [`actual${key}`]: element,
          }
        })
      }
    }
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
          <ProfessionalAimForm aim={aim} toggle={this.toggleEdit} updateState={updateState} />
        }
        {edit.experience === false ?
          <div className="UserCV__card UserCV__experience">
            <p className="UserCV__card__title">Professional experience</p>
            {experience.map((work, index) => {
              return (
                <div className="UserCV__block" key={'work-' + index} id={work.id} onClick={(e) => this.toggleEdit('experience', e)}>
                  <p className="UserCV__aim__text--title">{work.position} at {work.name}</p>
                  <p className="UserCV__aim__text--light UserCV__aim__text--offset-down">
                    {`${work.from.startMonth} ${work.from.startYear}`} - {`${work.from.endMonth} ${work.from.endYear}`}
                  </p>
                  <p className="UserCV__aim__text--p">{work.tasks}</p>
                </div>
              )
            })}
          </div> :
          <ProfessionalExperienceForm toggle={this.toggleEdit} actual={this.state.actualExperience} />
        }
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
