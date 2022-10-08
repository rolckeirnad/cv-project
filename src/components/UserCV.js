import React from "react";
import EducationForm from "./EducationForm";
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
    this.getEmptyObj = this.getEmptyObj.bind(this)
    this.setActualSection = this.setActualSection.bind(this)
    this.addNewEntry = this.addNewEntry.bind(this)
    this.updateEntry = this.updateEntry.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
  }

  toggleEdit(section, e = null, newEntry = false) {
    this.setState((state) => {
      return {
        edit: {
          ...state.edit,
          [section]: !state.edit[section],
        },
      }
    })
    if (section !== 'aim' && newEntry === false) this.setActualSection(section, e)
  }

  getEmptyObj(section) {
    const expObj = {
      name: '', position: '', tasks: '', startMonth: 'January', startYear: '2022', endMonth: 'January', endYear: '2022'
    }
    const eduObj = {
      name: '', level: '', title: '', startYear: '2022', endYear: '2022'
    }
    return section === 'experience' ? { ...expObj } : { ...eduObj }
  }

  setActualSection(section, e) {
    const key = section === 'experience' ? 'Experience' : 'Education'
    const id = e.currentTarget.id
    if (id === '') {
      this.setState((state) => {
        return {
          ...state,
          [`actual${key}`]: null
        }
      })
    } else {
      const arr = section === 'experience' ? this.props.experience : this.props.education
      const element = arr.find((entry) => entry.id === id)
      this.setState((state) => {
        return {
          ...state,
          [`actual${key}`]: { ...element, id },
        }
      })
    }
  }

  addNewEntry(section) {
    const key = section === 'experience' ? 'Experience' : 'Education'
    const emptyObj = section === 'experience' ? this.getEmptyObj('experience') : this.getEmptyObj('education')
    console.log(key, emptyObj)
    this.setState((state) => {
      return {
        ...state,
        [`actual${key}`]: { ...emptyObj },
      }
    })
    this.toggleEdit(section, null, true)
  }

  updateEntry(section, formInputs, e) {
    const { updateSection } = this.props
    const actualState = section === 'experience' ? this.state.actualExperience : this.state.actualEducation
    const entry = { ...actualState, ...formInputs }
    updateSection(section, entry)
    this.toggleEdit(section, e)
  }

  deleteEntry(e, section) {
    e.stopPropagation()
    const { deleteEntry } = this.props
    const id = e.target.parentElement.id
    deleteEntry(section, id)
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
              <button type="button" className="UserCV__button UserCV__button--green" onClick={(e) => this.addNewEntry('experience')}>Add</button>
            </p>
            {experience.map((work, index) => {
              return (
                <div className="UserCV__block --display-hidden" key={'work-' + index} id={work.id} onClick={(e) => this.toggleEdit('experience', e)}>
                  <button className="UserCV__button UserCV__button--red --hidden --delete-position" onClick={(e) => this.deleteEntry(e, 'experience')}>Delete</button>
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
        {edit.education === false ?
          <div className="UserCV__card UserCV__education">
            <p className="UserCV__card__title">Education
              <button type="button" className="UserCV__button UserCV__button--green" onClick={(e) => this.addNewEntry('education')}>Add</button>
            </p>
            {education.map((school, index) => {
              return (
                <div className="UserCV__block --display-hidden" key={'school-' + index} id={school.id} onClick={(e) => this.toggleEdit('education', e)}>
                  <button className="UserCV__button UserCV__button--red --hidden --delete-position" onClick={(e) => this.deleteEntry(e, 'education')}>Delete</button>
                  <p className="UserCV__aim__text--title">{school.name}</p>
                  <p className="UserCV__aim__text--light UserCV__aim__text--offset-down">{school.startYear} - {school.endYear}</p>
                  <p className="UserCV__aim__text--p">{school.title}</p>
                </div>
              )
            })}
          </div> :
          <EducationForm toggle={this.toggleEdit} actual={this.state.actualEducation} updateEntry={this.updateEntry} />}
      </div>
    )
  }
}

export default UserCV
