import React, { Component }  from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import List from './components/List';

import 'jquery/src/jquery';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {

  state = {
    dogDataArray:[],
    location:{}
  }

  componentDidMount() {
    axios.get('/dogData')
      .then((res) => {
        console.log(res.data.records)
        this.setState({
          dogDataArray: res.data.records
        }) 
      })
  }

  render() {
    return (
      <div>
        <header className="App-header">
        header
        </header>
        <CardList dogData={this.state.dogDataArray} />
        <List />
      </div>
    )
  }
}

export default App;
