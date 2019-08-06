import React, { Component } from 'react';
import axios from 'axios';
import { breeds } from '../assets/dogbreed';
import ImageUpload from './ImageUpload';
// import FormComponent from '../components/form/FormApp';
import TextInput from '../components/form/TextInput';
import NumberInput from '../components/form/NumberInput';
import validate from '../components/form/validate';
import TextArea from '../components/form/TextArea';
import SelectMulti from './form/SelectMulti';
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
               placeholder: 'What is the name of your dog',
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
               placeholder: 'brief comment about your dog',
               valid: false,
               validationRules: {
                   minLength: 4,
                   isRequired: true
               },
               touched: false
           },
           ageValue: {
               value: 0,
               valid: false,
               touched: false,
               validationRules: {
                   isRequired: true,
               },
               options: [{
                           value: 'null',
                           displayValue: '...'
                       }, 
                    {
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
           ownerInfo: {
               value: '',
               placeholder: '08123456789',
               valid: false,
               validationRules: {
                   minLength: 1,
                   isRequired: true
               },
               touched: false
           },
           imageLink:{
               value: [{
                    "url": localStorage.getItem('imageUrl')
                }],
               valid: true,
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

       axios.post('/dogData',{ 
       fields:formData, 
        "typecast": true
      })
        .then((response) => {
        console.log(response)
        alert(`successfully added 😆!`);
       
       }).catch((err => {
           console.log(err)
       }));
       localStorage.clear()
   }
   
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>ADD NEW DOG DATA</strong></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{position: 'relative',bottom: '-8px'}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-popup">
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label htmlFor="name">Dog Name</label>
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
                                            <SelectMulti name="breed" id="inputBreed"
                                                value={this.state.formControls.breed.value}
                                                onChange={this.changeHandler}
                                                options={this.state.formControls.breed.options}
                                                touched={this.state.formControls.breed.touched}
                                                valid={this.state.formControls.breed.valid}
                                            />
                                        </div>
                                        <div className = "container-fluid">
                                            <ImageUpload />
                                        </div>
                                        
                                        <div className = "container-fluid">
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <Radio name="gender"
                                                value={this.state.formControls.gender.value}
                                                onChange={this.changeHandler}
                                                options={this.state.formControls.gender.options}
                                                touched={this.state.formControls.gender.touched}
                                                valid={this.state.formControls.gender.valid}
                                                />
                                            </div>
                                            
                                            <div className = "custom-control custom-radio custom-control-inline" >
                                                <Radio name="purpose"
                                                    value={this.state.formControls.purpose.value}
                                                    onChange={this.changeHandler}
                                                    options={this.state.formControls.purpose.options}
                                                    touched={this.state.formControls.purpose.touched}
                                                    valid={this.state.formControls.purpose.valid}
                                                />
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
                                            <label htmlFor="ownerInfo">Phone Number</label>
                                                <NumberInput name="ownerInfo" id="ownerInfo"
                                                    placeholder={this.state.formControls.ownerInfo.placeholder}
                                                    value={this.state.formControls.ownerInfo.value}
                                                    onChange={this.changeHandler}
                                                    touched={this.state.formControls.ownerInfo.touched}
                                                    valid={this.state.formControls.ownerInfo.valid}
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
                                            Submit
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
