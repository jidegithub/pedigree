import React, { Component }  from 'react';
import './App.scss';
import axios from 'axios'
import CardList from './components/CardList'
// import AddCard from './components/AddCard'

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
      </div>
    )
  }
}

export default App;
