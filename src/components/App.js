import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="playlistNav">
          <NavBar />   
        </div>
        <div className="container">
          <div className="playlistInput">
            <PlayListForm />
          </div>
          <div className="playlistResults">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
