import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        profile: {
          avatar: 'http://placekitten.com/200/200',
          name: 'Your Name Here',
          country: 'México',
          city: 'CDMX',
          address: 'Street 123',
          contact: { email: 'test@mail.com', phone: '12345', links: [] },
        },
        aim: { title: 'Title', description: 'lorem ipsum' },
        experience: [
          {
            name: 'Company 1', position: 'Position', tasks: [], from: { start: 'December 2018', end: 'September 2021' }
          },
        ],
        education: [
          {
            name: 'School 1', title: 'Position', from: { start: '2019', end: '2012' }
          },
        ],
      },
    }
    this.setNewState = this.setNewState.bind(this)
    this.setProfile = this.setProfile.bind(this)
    this.updateSection = this.updateSection.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
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
      obj.id = `${section}-${newArr.length + 1}`
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
    const { user } = this.state;
    return (
      <div className="App" >
        <Header />
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
