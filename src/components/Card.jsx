import React, { useState } from "react";
import Icons from '../Icons';


export default function Card(props) {
  const [visible, setVisible] = useState(false);

  const HandleBtnToggle = () => {
    setVisible(!visible);
  };

  return (
    <div id='parent-container'>
      <div className="dogImageOrSlider">
        <img src={props.image} className="dogImage" alt="dog" />
      </div>
      <div className="dogInfo">
        <div className="dogInfo-profile pd-15">
          <span className='bold'>{props.name}</span>
          <span><Icons name={"heart4"} color={"#282c34"} size={19} /> {props.likesCount} likes</span>
          {/* <span><Icons name={"heart5"} color={"#eee"} size={19} /> {props.likesCount} likes</span> */}
        </div>
        <div className='pdLR-15'>
          <p className='lightblack-txt bolder'>{props.breed}</p>
        </div>
        <div className="dogInfo-identity">
          <span className='gender'><Icons name={"male"} color={"#282c34"} size={19} /> {props.gender}</span>
          <span className='age'>{props.age}months</span>
        </div>
        <div className="dogLocation pd-15">
          <div className='dogLocation-info'>
            <p className='black-txt mTop-6'><Icons name={"location2"} color={"#282c34"} size={19} /> {props.location.toUpperCase()}, 4 miles away</p>
            <button className="dogOwnerprofileToggle" onClick={HandleBtnToggle}>
              <Icons name={"quotes-left"} color={"#282c34"} size={19} /> 
              <span className='black-txt bold'>contact owner</span> 
            </button>
          </div>

          {visible && 
          <div className="dogOwnerprofile mTop-6">
            <p>{props.username}</p>
            <p>{props.ownerinfo}</p>
          </div>
          }
          
        </div>
        <div className="dogBio">
          <form>
            <textarea className="textarea" rows="5" placeholder="e.g. Hello world" id="comment" maxLength="195">{props.comment}</textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

