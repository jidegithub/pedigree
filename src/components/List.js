import React, { Component } from 'react';
import app from "./base";
import {NavLink} from 'react-router-dom';
import Hamburger from './Hamburger';
import Modal from './Modal';
import Icons from '../Icons';
import '../styles/App.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "ADD NEW DATA",
          msg: "make payment on the 3rd of march"
        }
      ]
    }
  }

  replaceModalItem = (index)=> {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails = (item)=> {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <main key={index}>
          <Hamburger />
          <button 
          onClick={() => app.auth().signOut()}
          className="button">
            Sign out</button>

            <div className="tabbedNav">
              <nav className="navbar navbar-default navbar-static-top">
                  <ul className="nav justify-content-space-around">
                      <li className="nav-item">
                          <NavLink to="/app" exact activeClassName="active" className="nav-link">Breed</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/list" activeClassName="active" className="nav-link">Sell</NavLink>
                      </li>
                  </ul>
              </nav>
          </div>

          <div className="flex space-evenly">
            <span><button style={{paddingTop:'9px', paddingBottom: '9px'}} className="btn add-btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                onClick={() => this.replaceModalItem(index)}>
                <span style={{paddingLeft: '3px'}} className="far"><Icons name={"plus"} color={"#fff"} size={100}/></span> 
                </button></span>
          </div>
        </main>
      )
    });
    
    return (
      <div>
        <div className="comment-box">
          <div className="comment">
            {brochure}
          </div>
        </div>
        <Modal
          id={this.props.id}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;