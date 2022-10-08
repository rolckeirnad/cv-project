import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import uniqid from 'uniqid'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        profile: {
          avatar: 'http://placekitten.com/200/200',
          name: 'Daniel Gallardo Castillo',
          country: 'México',
          city: '',
          address: 'Click to edit',
          email: 'your@email.com',
          phone: '52-12345678',
          links: [],
        },
        aim: { title: 'Web Developer', description: 'Here you can write your professional aim. Click here for edit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, vero culpa? Labore facilis omnis illo, eos voluptatibus sunt repellat beatae explicabo fugit repellendus adipisci quasi, impedit distinctio nobis tenetur quis, ipsa soluta quos pariatur delectus? Labore repellendus itaque sed accusamus?' },
        experience: [
          {
            id: 'experience-1', name: 'Company 1', position: 'Your Position', tasks: 'Here you can add a brief description about your daily tasks during your time working at this company', startMonth: 'December', startYear: '2018', endMonth: 'September', endYear: '2021'
          },
          {
            id: 'experience-2', name: 'Company 2', position: 'Your Position', tasks: 'You can edit these entries when you make a click, click on save to keep changes or cancel to discard', startMonth: 'January', startYear: '2018', endMonth: 'December', endYear: '2018'
          },
        ],
        education: [
          {
            id: 'education-1', name: 'Name of School 1', level: 'School level', title: 'Title or study name', startYear: '2012', endYear: '2015'
          },
          {
            id: 'education-2', name: 'Name of School 2', level: 'School level', title: 'Title or study name', startYear: '2016', endYear: '2019'
          },
        ],
      },
    }
    this.resetState = this.resetState.bind(this)
    this.setNewState = this.setNewState.bind(this)
    this.setProfile = this.setProfile.bind(this)
    this.updateSection = this.updateSection.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
  }
  componentDidMount() {
    this.resetState()
  }

  resetState() {
    this.setState({
      user: {
        profile: {
          avatar: 'http://placekitten.com/200/200',
          name: 'Daniel Gallardo Castillo',
          country: 'México',
          city: '',
          address: 'Click to edit',
          email: 'your@email.com',
          phone: '52-12345678',
          links: [],
        },
        aim: { title: 'Web Developer', description: 'Here you can write your professional aim. Click here for edit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, vero culpa? Labore facilis omnis illo, eos voluptatibus sunt repellat beatae explicabo fugit repellendus adipisci quasi, impedit distinctio nobis tenetur quis, ipsa soluta quos pariatur delectus? Labore repellendus itaque sed accusamus?' },
        experience: [
          {
            id: 'experience-1', name: 'Company 1', position: 'Your Position', tasks: 'Here you can add a brief description about your daily tasks during your time working at this company', startMonth: 'December', startYear: '2018', endMonth: 'September', endYear: '2021'
          },
          {
            id: 'experience-2', name: 'Company 2', position: 'Your Position', tasks: 'You can edit these entries when you make a click, click on save to keep changes or cancel to discard', startMonth: 'January', startYear: '2018', endMonth: 'December', endYear: '2018'
          },
        ],
        education: [
          {
            id: 'education-1', name: 'Name of School 1', level: 'School level', title: 'Title or study name', startYear: '2012', endYear: '2015'
          },
          {
            id: 'education-2', name: 'Name of School 2', level: 'School level', title: 'Title or study name', startYear: '2016', endYear: '2019'
          },
        ],
      },
    })
  }

  setNewState(section, obj) {
    this.setState((state) => {
      return {
        user: {
          ...state.user,
          [section]: { ...obj }
        }
      }
    })
  }

  setProfile(section, obj) {
    this.setState((state) => {
      return {
        user: {
          ...state.user,
          [section]: { ...state.user[section], ...obj }
        }
      }
    })
  }

  updateSection(section, obj) {
    let updated = false
    let arr = [...this.state.user[section]]
    let newArr = arr.map((work) => {
      if (work.id === obj.id) {
        updated = true
        return { ...obj }
      }
      else return work
    })
    if (updated === false) {
      obj.id = uniqid()
      newArr.push(obj)
    }
    this.setState((state) => {
      return {
        user: {
          ...state.user,
          [section]: [...newArr]
        }
      }
    })
  }

  deleteEntry(section, id) {
    let arr = [...this.state.user[section]]
    let newArr = arr.filter((entry) => entry.id !== id)
    this.setState((state) => {
      return {
        user: {
          ...state.user,
          [section]: [...newArr]
        }
      }
    })
  }

  render() {
    const { user } = this.state
    return (
      <div className="App" >
        <Header reset={this.resetState} />
        <Content
          user={user}
          updateState={this.setNewState}
          updateSection={this.updateSection}
          deleteEntry={this.deleteEntry}
          setProfile={this.setProfile}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
