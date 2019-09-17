import React from 'react';
import '../../styles/App.scss';

const TextInput = (props) => {
    return (
            <input type="number" className="form-control" {...props} /> 
    );
}

export default TextInput;