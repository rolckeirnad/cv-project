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
    this.updateEntry = this.updateEntry.bind(this)
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
    const key = section === 'experience' ? 'Experience' : 'Education'
    if (section !== 'aim' && e !== null) {
      const id = e.currentTarget.id
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
        console.log(element)
        this.setState((state) => {
          return {
            ...state,
            [`actual${key}`]: { ...element, id },
          }
        })
      }
    } else {
      const value = section === 'experience' ? this.props.experience : this.props.education
      let emptyObj = {}
      Object.keys(value[0]).forEach((v) => {
        emptyObj[v] = ''
      })
      this.setState((state) => {
        return {
          ...state,
          [`actual${key}`]: { ...emptyObj },
        }
      })
    }
  }

  updateEntry(section, formInputs, e) {
    const { updateSection } = this.props
    const entry = { ...this.state.actualExperience, ...formInputs }
    updateSection(section, entry)
    this.toggleEdit(section, e)
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
            <p className="UserCV__card__title">Professional experience
              <button type="button" className="UserCV__button UserCV__button--green" onClick={(e) => this.toggleEdit('experience')}>Add</button>
            </p>
            {experience.map((work, index) => {
              return (
                <div className="UserCV__block" key={'work-' + index} id={work.id} onClick={(e) => this.toggleEdit('experience', e)}>
                  <p className="UserCV__aim__text--title">{work.position} at {work.name}</p>
                  <p className="UserCV__aim__text--light UserCV__aim__text--offset-down">
                    {`${work.startMonth} ${work.startYear}`} - {`${work.endMonth} ${work.endYear}`}
                  </p>
                  <p className="UserCV__aim__text--p">{work.tasks}</p>
                </div>
              )
            })}
          </div> :
          <ProfessionalExperienceForm toggle={this.toggleEdit} actual={this.state.actualExperience} updateEntry={this.updateEntry} />
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
