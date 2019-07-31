import React from 'react';
import '../../App.scss';

const TextInput = (props) => {
    return (
            <input type="number" className="form-control" {...props} /> 
    );
}

export default TextInput;