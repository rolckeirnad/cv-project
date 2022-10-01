import React from "react";

class ProfessionalAimForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: props.aim.title,
      textarea: props.aim.description,
    }
    this.inputOnChange = this.inputOnChange.bind(this)
    this.textareaOnChange = this.textareaOnChange.bind(this)
  }

  inputOnChange(e) {
    e.preventDefault()
    this.setState({
      input: e.target.value,
    })
  }

  textareaOnChange(e) {
    e.preventDefault()
    this.setState({
      textarea: e.target.value,
    })
  }

  getInputs() {

  }

  render() {
    const { toggle } = this.props
    const { input, textarea } = this.state
    return (
      <form className="UserCV__card--static">
        <p className="UserCV__card__title">Professional Aim</p>
        <p className="UserCV__aim__text--light UserCV__aim__text--offset-up">Title</p>
        <input onChange={this.inputOnChange} className="UserCV__input" id="title" type="text" value={input} />
        <p className="UserCV__aim__text--light UserCV__aim__text--offset-up">Professional aim</p>
        <textarea onChange={this.textareaOnChange} className="UserCV__textarea" name="" id="description" cols="30" rows="10" value={textarea}></textarea>
        <div className="UserCV__block --flex--space-around">
          <button className="UserCV__button UserCV__button--green" type="button">Save</button>
          <button className="UserCV__button UserCV__button--red" type="button" onClick={(e) => toggle('aim')}>Cancel</button>
        </div>
      </form>
    )
  }
}

export default ProfessionalAimForm