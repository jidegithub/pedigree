import React, { Component } from 'react';
// import axios from 'axios';
import { breeds } from '../assets/dogbreed';
// import FormComponent from '../components/form/FormApp';
import TextInput from '../components/form/TextInput';
import NumberInput from '../components/form/NumberInput';
import validate from '../components/form/validate';
import TextArea from '../components/form/TextArea';
import Select from '../components/form/Select';
import SelectTwo from '../components/form/SelectTwo';
import Radio from '../components/form/Radio';

class Modal extends Component {
   state = {
       formIsValid: false,
       formControls: {
           age: {
               value: '',
               placeholder: 'how old is your dog',
               valid: false,
               validationRules: {
                   minLength: 1,
                   isRequired: true
               },
               touched: false
           },
           name: {
               value: '',
               placeholder: 'What is your name',
               valid: false,
               validationRules: {
                   minLength: 4,
                   isRequired: true
               },
               touched: false
           },
           userName: {
               value: '',
               placeholder: 'how do we identify you ?',
               valid: false,
               validationRules: {
                   minLength: 1,
                   isRequired: true
               },
               touched: false
           },
           comment: {
               value: '',
               placeholder: 'brief comment about',
               valid: false,
               validationRules: {
                   minLength: 4,
                   isRequired: true
               },
               touched: false
           },
           ageValue: {
               value: '',
               valid: false,
               touched: false,
               validationRules: {
                   isRequired: true,
               },
               options: [{
                       value: 'year(s)',
                       displayValue: 'Year(s)'
                   },
                   {
                       value: 'month(s)',
                       displayValue: 'Month(s)'
                   }
               ]
           },
           gender: {
               value: '',
               placeholder: 'What is your gender',
               valid: false,
               touched: false,
               validationRules: {
                   isRequired: true,
               },
               options: [{
                       value: 'male',
                       displayValue: 'Male'
                   },
                   {
                       value: 'female',
                       displayValue: 'Female'
                   }
               ]
           },
           breed: {
               value: '',
               valid: false,
               touched: false,
               validationRules: {
                    isRequired: true,
               },
               options: [...breeds]
           },
           purpose: {
               value: '',
               valid: false,
               touched: false,
               validationRules: {
               isRequired: true,
               },
               options: [{
                       value: 'for sale',
                       displayValue: 'For Sale'
                   },
                   {
                       value: 'for breeding',
                       displayValue: 'For Breeding'
                   }
               ]
           },
           phoneNumber: {
               value: '',
               placeholder: '08123456789',
               valid: false,
               validationRules: {
                   minLength: 1,
                   isRequired: true
               },
               touched: false
           } 
       }
   }

   changeHandler = event => {

       const name = event.target.name;
       const value = event.target.value;

       const updatedControls = {
           ...this.state.formControls
       };
       const updatedFormElement = {
           ...updatedControls[name]
       };
       updatedFormElement.value = value;
       updatedFormElement.touched = true;
       updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

       updatedControls[name] = updatedFormElement;

       let formIsValid = true;
       for (let inputIdentifier in updatedControls) {
           formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
       }

       this.setState({
           formControls: updatedControls,
           formIsValid: formIsValid
       });
   }

   formSubmitHandler = () => {
       const formData = {};
       for (let formElementId in this.state.formControls) {
           formData[formElementId] = this.state.formControls[formElementId].value;
       }
       console.dir(formData);
   }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
        
    //     axios.post('/dogData',{
    //          body: data,
    //     })
    //     .then(res=>{
    //             console.log(res)
    //     })
    //     .catch()
    // }   
    
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>ADD NEW DOG DATA</strong></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{position: 'relative',bottom: '1px'}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-popup" onSubmit={this.handleSubmit}>
                                
                                
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label htmlFor="name">Name</label>
                                                <TextInput name="name" id="name"
                                                    placeholder={this.state.formControls.name.placeholder}
                                                    value={this.state.formControls.name.value}
                                                    onChange={this.changeHandler}
                                                    touched={this.state.formControls.name.touched}
                                                    valid={this.state.formControls.name.valid}
                                                />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="age">Age
                                                <NumberInput name="age" id="age"
                                                    placeholder={this.state.formControls.age.placeholder}
                                                    value={this.state.formControls.age.value}
                                                    onChange={this.changeHandler}
                                                    touched={this.state.formControls.name.touched}
                                                    valid={this.state.formControls.name.valid}
                                                />
                                                <div className="select">
                                                    <SelectTwo name="ageValue"
                                                        value={this.state.formControls.ageValue.value}
                                                        onChange={this.changeHandler}
                                                        options={this.state.formControls.ageValue.options}
                                                        touched={this.state.formControls.ageValue.touched}
                                                        valid={this.state.formControls.ageValue.valid}
                                                        />
                                                </div> 
                                            </label>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputBreed">Breed</label>
                                            <Select name="breed" id="inputBreed"
                                                value={this.state.formControls.breed.value}
                                                onChange={this.changeHandler}
                                                options={this.state.formControls.breed.options}
                                                touched={this.state.formControls.breed.touched}
                                                valid={this.state.formControls.breed.valid}
                                            />
                                        </div>
                                        <div className = "container-fluid">
                                            < div className = "form-group col-md-12" >
                                                <div className="file has-name is-boxed">
                                                    <label className="file-label">
                                                        <input className="file-input" type="file" name="resume" />
                                                        <span className="file-cta">
                                                        <span className="file-icon">
                                                            <i className="fas fa-upload"></i>
                                                        </span>
                                                        <span className="file-label">
                                                            Choose a file…
                                                        </span>
                                                        </span>
                                                        <span className="file-name">
                                                        Screen Shot 2017-07-29 at 15.54.25.png
                                                        </span>
                                                    </label>
                                                </div>
                                            </div> 
                                        </div>
                                        
                                        <div className = "container-fluid">
                                            <div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <Radio name="gender"
                                                    value={this.state.formControls.gender.value}
                                                    onChange={this.changeHandler}
                                                    options={this.state.formControls.gender.options}
                                                    touched={this.state.formControls.gender.touched}
                                                    valid={this.state.formControls.gender.valid}
                                                    />
                                                </div>
                                                
                                                {/* <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline1">Female</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">Male</label>
                                                </div> */}
                                            </div>
                                            
                                            <div>
                                                <Radio name="purpose"
                                                    value={this.state.formControls.purpose.value}
                                                    onChange={this.changeHandler}
                                                    options={this.state.formControls.purpose.options}
                                                    touched={this.state.formControls.purpose.touched}
                                                    valid={this.state.formControls.purpose.valid}
                                                />
                                                {/* <div className="custom-control custom-checkbox">
                                                    <input type="radio" id="customRadioInline3" name="purpose" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">For Breeding</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="radio" id="customRadioInline3" name="purpose" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">For Sale</label>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="exampleFormControlTextarea1">Comment</label>
                                            <TextArea name="comment" id="exampleFormControlTextarea1" row="3"
                                                placeholder={this.state.formControls.comment.placeholder}
                                                value={this.state.formControls.comment.value}
                                                onChange={this.changeHandler}
                                                touched={this.state.formControls.comment.touched}
                                                valid={this.state.formControls.comment.valid}
                                            />
                                        </div>
    
                                        <div className="form-group col-md-6">
                                            <label htmlFor="userName">Username</label>
                                                <TextInput name="userName" id="username"
                                                    placeholder="eg.john"
                                                    value={this.state.formControls.userName.value}
                                                    onChange={this.changeHandler}
                                                    touched={this.state.formControls.userName.touched}
                                                    valid={this.state.formControls.userName.valid}
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                                <NumberInput name="phoneNumber" id="phoneNumber"
                                                    placeholder={this.state.formControls.phoneNumber.placeholder}
                                                    value={this.state.formControls.phoneNumber.value}
                                                    onChange={this.changeHandler}
                                                    touched={this.state.formControls.phoneNumber.touched}
                                                    valid={this.state.formControls.phoneNumber.valid}
                                                />
                                        </div>
                                    </div>
                                    <div className = "modal-footer col-md-12" >
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={this.formSubmitHandler} 
                                            disabled={! this.state.formIsValid} 
                                            type="button" 
                                            className="btn btn-primary" 
                                            data-dismiss="modal" >
                                            Save changes
                                        </button>
                                    </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

//alternative for radio button check
// state = {
//     selected: 'radio-1'
//   };
//   componentDidUpdate () {
//     alert(document.querySelector('input[name=myRadio]:checked').value);
//   }
//   render () {
//     return (
//       <div>
//         <input type='radio' id='radio-1' name='myRadio' value='radio-1'
//           checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
//         <br />
//         <input type='radio' id='radio-2' name='myRadio' value='radio-2' 
//           checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} />
//       </div>