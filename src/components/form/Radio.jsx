import React from 'react';

const Radio = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">

            {props.options.map(option => (
                <div className="custom-control custom-radio custom-control-inline" key={option.value}>
                    <label>{option.displayValue}</label>
                    <input type="radio"
                        style={{ width: '17.78px'}}
                        name={props.name}
                        value={option.value}
                        onChange={props.onChange}
                        className={formControl}
                    />
                </div>
            ))}

        </div>
    );
}

export default Radio;