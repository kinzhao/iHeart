import React, { Component } from 'react';

import './App.css';
import { Singers } from './singers/singers';

const styles = {
  title: {
    textAlign: 'center',
    fontWeight: 'normal'
  }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <h2 style={styles.title}>Search from iHeart API</h2>
        <Singers/>
      </div>
    );
  }
}

export default App;