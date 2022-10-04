import React from "react";

class ProfessionalExperienceForm extends React.Component {
  constructor(props) {
    super(props)
    this.monthsList = this.monthsList.bind(this)
    this.yearsList = this.yearsList.bind(this)
    this.readInputs = this.readInputs.bind(this)
    this.updateInputs = this.updateInputs.bind(this)
  }
  monthsList() {
    return (
      <>
        <option value="January" >January</option>
        <option value="February" >February</option>
        <option value="March" >March</option>
        <option value="April" >April</option>
        <option value="May" >May</option>
        <option value="June" >June</option>
        <option value="July" >July</option>
        <option value="August" >August</option>
        <option value="September" >September</option>
        <option value="October" >October</option>
        <option value="November" >November</option>
        <option value="December" >December</option>
      </>
    )
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
    updateEntry('experience', formInputs, e)
  }

  render() {
    const { toggle, actual } = this.props
    return (
      <form className="UserCV__card--static --flex-column">
        <p className="UserCV__card__title">Professional experience</p>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Position
          <input type="text" id="position" defaultValue={actual.position} />
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Company Name
          <input type="text" id="name" defaultValue={actual.name} />
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Start Date
          <div className="--flex">
            <select name="month" id="startMonth" defaultValue={actual.startMonth}>
              {this.monthsList()}
            </select>
            <select name="year" id="startYear" defaultValue={actual.startYear}>
              {this.yearsList()}
            </select>
          </div>
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">End Date
          <div className="--flex">
            <select name="month" id="endMonth" defaultValue={actual.endMonth}>
              {this.monthsList()}
            </select>
            <select name="year" id="endYear" defaultValue={actual.endYear}>
              {this.yearsList()}
            </select>
          </div>
        </label>
        <label className="UserCV__aim__text--light UserCV__aim__text--offset-up --flex-column">Work Description
          <textarea name="" id="tasks" cols="30" rows="10" defaultValue={actual.tasks} />
        </label>
        <div className="UserCV__block --flex--space-around">
          <button className="UserCV__button UserCV__button--green" type="submit" onClick={this.updateInputs}>Save</button>
          <button className="UserCV__button UserCV__button--red" type="button" onClick={(e) => toggle('experience', e)}>Cancel</button>
        </div>
      </form>
    )
  }
}

export default ProfessionalExperienceForm