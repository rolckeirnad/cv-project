import React from "react";

class SidebarForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upload: false,
    }
    this.toggleUpload = this.toggleUpload.bind(this)
    this.readInputs = this.readInputs.bind(this)
    this.updateInputs = this.updateInputs.bind(this)
    this.saveURL = this.saveURL.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
  }

  toggleUpload() {
    this.setState({
      upload: !this.state.upload
    })
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

  saveURL(e) {
    const { setProfile } = this.props
    const url = e.target.parentElement.elements[0].value
    if (url !== "") {
      setProfile('profile', { avatar: url })
      this.toggleUpload()
    }
  }

  uploadImage(e) {
    const { setProfile } = this.props
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      setProfile('profile', { avatar: e.target.result })
      this.toggleUpload()
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { avatar, name, city, country, address, email, phone } = this.props.user
    const { cancel } = this.props
    const { upload } = this.state
    return (
      <>
        <div className="Sidebar__imgDiv">
          {upload === false ?
            <>
              <img className='Sidebar__img --edit' src={avatar} alt="User profile" />
              <button className="Sidebar__img__overlay UserCV__button" onClick={this.toggleUpload}>Change photo</button>
            </> :
            <>
              <form className="Sidebar__img__form">
                <label>Image URL:
                  <input type="text" id="url" />
                </label>
                <button className="Sidebar__img__form__save" type="button" onClick={this.saveURL}>Save URL</button>
                <p>or Upload a file:
                  <input type="file" id="file" accept="image/jpeg, image/png, image/jpg" onChange={this.uploadImage} />
                </p>
                <button className="Sidebar__img__form__cancel" type="button" onClick={this.toggleUpload}>X</button>
              </form>
            </>
          }
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
      </>
    )
  }
}

export default SidebarForm
