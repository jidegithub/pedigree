import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import app from '../components/base';
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
      sessionStorage.setItem("imageName", image.name)
      
       const storage = app.storage();

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
          <Progress
            type="circle"
            strokeWidth={3}
            percent={this.state.progress}
            width={70}
            theme={{
              success: {
                color: 'rgb(223, 105, 180)',
                trailColor: 'pink',
              },
              error: {
                symbol: this.state.progress + '%',
                trailColor: 'pink',
                color: 'red'
              },
              default: {
                symbol: this.state.progress + '%',
                trailColor: 'lightblue',
                color: 'blue'
              },
              active: {
                symbol: this.state.progress + '%',
                trailColor: 'yellow',
                color: 'orange'
              }
            }}
          />
          {/* <progress value={this.state.progress} max="100"/> */}
          <p>Uploading Selected Image: {this.state.progress}%</p>
          <div className="file has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" onChange={this.handleUpload} />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                {sessionStorage.getItem("imageName")}
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

 