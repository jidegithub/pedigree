import React from 'react';
import { Link } from 'react-router-dom';

const SeachBox = ({ searchfield, searchChange }) =>
    (<div className="lower">
        <form  method="get" action="">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" 
                    style={{marginTop:0}}
                    type="button" data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >
                        Breed
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/" className="dropdown-item">Gender</Link>
                        <Link to="/" className="dropdown-item">Location</Link>
                        <Link to="/" className="dropdown-item">Age</Link>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={searchChange}/>
            </div>
        </form>
    </div>)
   
export default SeachBox;
