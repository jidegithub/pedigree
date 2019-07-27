import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            msg: '',
        }
    }

    
    componentDidMount() {
        console.log(this.props)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            title: nextProps.title,
            msg: nextProps.msg,
        });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    msgHandler(e) {
        this.setState({ msg: e.target.value });
    }

    handleSave = () => {
        const item = this.state;
        // this.props.saveModalDetails(item)
        let {msg, title} = this.state
        let data = {
            title,
            msg
        }
        // const commentToPost = (item.msg)

        axios.put(`http://localhost:3000/payments/${this.props.id}`,{
            "comment": data   
        })
        .then(res=>{
                console.log(res)
        })
        .catch()
    }   
    
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>ADD NEW DOG DATA</strong></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{position: 'relative',bottom: '18px'}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <p><span className="modal-label">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p> */}
                            <form className="form-popup">
                                <div className='form-group'>
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" row="3" value={this.state.msg} onChange={(e) => this.msgHandler(e)} />
                                </div>
                                
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="name">Name</label>
                                            <input class="form-control" type="text" id="name" placeholder="Default input" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputBreed">Breed</label>
                                            <select id="inputBreed" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadioInline1">Female</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadioInline2">Male</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="username">Username</label>
                                            <input class="form-control" type="text" id="name" placeholder="Default input" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="phone number">Phone Number</label>
                                            <input class="form-control" type="text" for="name" id="phone number" placeholder="Default input" />
                                        </div>
                                    </div>
                            </form> 
                        </div>

                        < div className = "modal-footer col-md-12" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;