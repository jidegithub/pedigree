import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="linkToUserView">
        <Link to="/login"
          className = "whiteTxt width100 button is-link" 
          style = {{height: '36px', 
          borderRadius:'10px',
          fontSize: '14px'}}
        >
          Get Started
        </Link>
      </div>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
      </Swiper>
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