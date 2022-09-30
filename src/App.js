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
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App" >
        <Header />
        <Content user={user} />
        <Footer />
      </div>
    )
  }
}

export default App;
