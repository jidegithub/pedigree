import React from 'react';

const TextArea = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
            <textarea {...props} className={formControl} />
    );
}

export default TextArea;