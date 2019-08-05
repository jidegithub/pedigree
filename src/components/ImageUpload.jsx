import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYC-sZn5de3eh-fNjgXcoeU6hFwbPIrgY",
  authDomain: "pedigree-6e5ca.firebaseapp.com",
  databaseURL: "https://pedigree-6e5ca.firebaseio.com",
  projectId: "pedigree-6e5ca",
  storageBucket: "pedigree-6e5ca.appspot.com",
  messagingSenderId: "974569009602",
  appId: "1:974569009602:web:db4d7525e2205eb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class ImageUpload extends Component {
  
    state = {
      image: null,
      url: '',
      progress: 0
    }
    
  handleUpload = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      localStorage.setItem('imageName', image.name)
      
       const storage = firebase.storage();
        // const {image} = this.state;

      const uploadTask = storage.ref(`dogImages/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progress function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
      storage.ref('dogImages').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            localStorage.setItem('imageUrl', url)
            this.setState({url});
        })
    });
    }
    
     
  }
  render() {
    return (
      <div>
        <br/>
        <div className="form-group col-md-12">
          <progress value={this.state.progress} max="100"/>
          <div className="file has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" onChange={this.handleUpload} />
              {/* <input type="file" name="resume" /> */}
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                {localStorage.getItem('imageName')}
              </span>
            </label>
          </div>
          <br/>
        <img src={this.state.url || 'http://via.placeholder.com/200x100'} alt="Uploaded images" height="200" width="100"/>
        </div> 
      </div>
    )
  }
}

export default ImageUpload;

 