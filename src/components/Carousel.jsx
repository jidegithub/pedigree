import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import One from '../assets/1.svg';
import Two from '../assets/2.svg';
import Three from '../assets/3.svg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    // className="carousel-img"
                    src={One}
                    alt="First slide"
                /> 
                
                <Carousel.Caption>
                    <div className="bg-black">
                        <h3>Chill in your house</h3>
                        <p>Dog walk shows are good but not neccessary</p>
                    </div>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    // className=""
                    src={Two}
                    alt="second slide"
                />
                <Carousel.Caption>
                    <div className="bg-black">
                        <h3>A snapshot is enough</h3>
                        <p>Supply some information about your dog and everyone knows</p>
                    </div>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    // className=""
                    src={Three}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="bg-black">
                        <h3>View Listings</h3>
                        <p>Either for breeding or for sale, we have got you covered </p>
                    </div>
                   
                    <div style={{ padding: '6px', backgroundColor: 'rgb(211, 4, 236)', color:'#fff'}}>
                       <Link to="/app" >explore</Link> 
                   </div>
                       
                   
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}

export default ControlledCarousel