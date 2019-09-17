import React from 'react';
import '../../styles/App.scss';

const TextInput = (props) => {
    return (
            <input type="text" className="form-control" {...props} /> 
    );
}

export default TextInput;