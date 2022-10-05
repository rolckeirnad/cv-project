import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props)
    this.yearsList = this.yearsList.bind(this)
    this.readInputs = this.readInputs.bind(this)
    this.updateInputs = this.updateInputs.bind(this)
  }

  yearsList() {
    return (
      Array(100).fill().map((_, i) => 2022 - i).map((year, index) => {
        return <option key={index}>{year}</option>
      })
    )
  }

  readInputs(elements) {
    let obj = {}
    for (let each of elements) {
      if (each.id) obj[each.id] = each.value
    }
    return obj
  }

  updateInputs(e) {
    e.preventDefault()
    const form = e.target.parentElement.parentElement
    const formInputs = this.readInputs(form.elements);
    const { updateEntry } = this.props
    updateEntry('education', formInputs, e)
  }

  render() {
    const { toggle, actual } = this.props
    return (
      <form className="UserCV__card UserCV__education">
        <p className="UserCV__card__title">Education</p>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Name
          <input type="text" id="name" defaultValue={actual.name} />
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Level
          <input type="text" id="level" defaultValue={actual.level} />
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Title
          <input type="text" id="title" defaultValue={actual.title} />
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Start Year
            <select name="year" id="startYear" defaultValue={actual.startYear}>
              {this.yearsList()}
            </select>
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">End Year
            <select name="year" id="endYear" defaultValue={actual.endYear}>
              {this.yearsList()}
            </select>
        </label>
        <div className="UserCV__block --flex--space-around">
          <button className="UserCV__button UserCV__button--green" type="submit" onClick={this.updateInputs}>Save</button>
          <button className="UserCV__button UserCV__button--red" type="button" onClick={(e) => toggle('education', e)}>Cancel</button>
        </div>
      </form>
    )
  }
}

export default EducationForm
