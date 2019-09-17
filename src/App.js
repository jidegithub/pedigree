import React, { Component }  from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Hamburger from './components/Hamburger';

import app from "./components/base";
import 'jquery/src/jquery';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Styles
import 'react-id-swiper/lib/styles/css/swiper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

class App extends Component {
  state = {
    dogDataArray:[],
    location:{},
    searchfield:''
  }

  componentWillMount(){
    //placeholder to hold something that firebase can reference to
    sessionStorage.setItem("imageName", "image name")
  }

  componentDidMount() {
    axios.get('/dogData')
      .then((res) => {
        //console.log(res.data.records)
        this.setState({
          dogDataArray: res.data.records
        }) 
      })
  }

  onSearchChange = (event) =>{
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredDogs = this.state.dogDataArray.filter(dog => {
      return dog.fields.breed.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div>
        <Hamburger />
        <button 
        onClick={() => app.auth().signOut()}
        className="button"
        >
          Sign out</button>

          <div className="tabbedNav">
            <nav className="navbar navbar-default navbar-static-top">
                <ul className="nav justify-content-start">
                    <li className="nav-item">
                        <NavLink to="/app" exact activeClassName="active" className="nav-link">Breed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/list" activeClassName="active" className="nav-link">Sell</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

        <header className="App-header">
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <CardList dogData={filteredDogs} />
      </div>
    )
  }
}

export default App;
