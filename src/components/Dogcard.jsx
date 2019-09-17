import React from 'react';
import Swiper from 'react-id-swiper';
  
  const ProgressPagination = () => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      observer:true,
    }

    return (
      <Swiper {...params} shouldSwiperUpdate>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    )
  };
  export default ProgressPagination;