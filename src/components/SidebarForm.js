import React from "react";

class SidebarForm extends React.Component {
  constructor(props) {
    super(props)
    this.readInputs = this.readInputs.bind(this)
    this.updateInputs = this.updateInputs.bind(this)
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
    const { setProfile, cancel } = this.props
    setProfile('profile', formInputs)
    cancel()
  }

  render() {
    const { avatar, name, city, country, address, email, phone } = this.props.user
    const { cancel } = this.props
    return (
      <div>
        <div className="Sidebar__imgDiv">
          <img className='Sidebar__img --edit' src={avatar} alt="User profile" />
          <button className="Sidebar__img__overlay UserCV__button">Change photo</button>
        </div>
        <form className="Sidebar__form">
          <label className="Sidebar__label">Name:
            <input type="text" id="name" defaultValue={name} />
          </label>
          <label className="Sidebar__label">City:
            <input type="text" id="city" defaultValue={city} />
          </label>
          <label className="Sidebar__label">Country:
            <input type="text" id="country" defaultValue={country} />
          </label>
          <label className="Sidebar__label">Address:
            <input type="text" id="address" defaultValue={address} />
          </label>
          <label className="Sidebar__label">Email:
            <input type="text" id="email" defaultValue={email} />
          </label>
          <label className="Sidebar__label">Phone:
            <input type="text" id="phone" defaultValue={phone} />
          </label>
          <div className="UserCV__block --flex--space-around">
            <button className="UserCV__button UserCV__button--green" type="submit" onClick={this.updateInputs}>Save</button>
            <button className="UserCV__button UserCV__button--red" type="button" onClick={cancel}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SidebarForm
