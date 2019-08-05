import React from 'react';

const Select = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <select className={formControl} value={props.option} onChange={props.onChange} name={props.name}>
                <option>..</option>
                {props.options.map(option => (
                    <option value={option.textContent}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;