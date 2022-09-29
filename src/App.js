import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* User information: picture, name, country, address, contact: [phone, email] */}
      {/* Professional aim: Position title, Salary, Description */}
      {/* Work Experience: [{Company name, position title, tasks:title,description, date of work:start,end}] */}
      {/* Education: [{school name, title of study, date of study:start,end}] */}
      <Footer />
    </div>
  );
}

export default App;
