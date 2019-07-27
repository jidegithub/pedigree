import React, { Component }  from 'react';
import './App.scss';
import axios from 'axios';
import CardList from './components/CardList';
import List from './components/List';
//import AddCard from './components/AddCard';
import 'jquery/src/jquery';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {

  state = {
    dogDataArray:[]
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
