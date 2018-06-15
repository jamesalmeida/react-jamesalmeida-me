import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MyComponent from '../MyComponent';
import Nav from '../Nav';
import Footer from '../Footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
  }

  render() {
    let styles = {
      marginTop: '100px'
    }
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route path="/" exact strict render={
            () => {
              return (
                <div>
                  <p style={styles}>home path</p>
                </div>
              );
            }
          }/>
          <Route path="/about" exact render={
            () => {
              return ( <p style={styles}>about path</p> );
            }
          }/>
          <MyComponent
            title="this is the component title"
            name="James"
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
