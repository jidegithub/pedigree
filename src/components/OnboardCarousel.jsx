import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/images/slide1.png';
import pic2 from '../assets/images/slide2.png';
import pic3 from '../assets/images/slide3.png';
import pic4 from '../assets/images/slide4.png';
import Swiper from 'react-id-swiper';
  

  const Navigation = () => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (
      <>
      <Swiper {...params}>
        <div>
          <img src={pic1} alt="dog-slide" />
        </div>
        <div>
          <img src={pic2} alt="dog-slide" />
        </div>
        <div>
          <img src={pic3} alt="dog-slide" />
        </div>
        <div>
          <img src={pic4} alt="dog-slide" />
        </div>
      </Swiper>
      <div className='intro-btn'>
        <div className="linkToUserView">
          <Link to="/login"
            className = "pinkBtnBgClr whiteTxt width100 button is-link" 
            style = {{height: '36px', 
            borderRadius:'10px',
            fontSize: '14px'}}
          >
            Get Started
          </Link>
        </div>
        <div className="linkToUserView">
          <Link to="/login"
            className = "whiteTxt width100 button is-link" 
            style = {{height: '36px', 
            borderRadius:'10px',
            fontSize: '14px',
            marginTop:'12px'
          }}
          >
            Login
          </Link>
        </div>
      </div>
      </>
    )
  };
  export default Navigation;

        // <Link to = "/login"
        //   className = "whiteTxt width100 button is-link" 
        //   style = {{height: '36px', 
        //   borderRadius:'10px',
        //   fontSize: '14px'
        //   }}
        //   >
        //     Get started
        //   </Link>