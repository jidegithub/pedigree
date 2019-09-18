import React from 'react';
import Card from './Card';
import Spinner from './spinner';
// import Swiper from 'react-id-swiper';


 const CardList = (props) => {

    // const params = {
    //     navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //     },
    //     slidesPerView: 4,
    //     spaceBetween: 20,
    //     centeredSlides: true, 
    //     loop: false,
    //     autoplay: {
    //     delay: 2000,
    //     },
    //     a11y: {
    //     prevSlideMessage: 'Previous slide',
    //     nextSlideMessage: 'Next slide',
    //     },
    // }

     return (   
         props.dogData.length ? (
        <>
            <div className="super-parentContainer">
                <h3>
                    Latest 
                </h3>
                {props.dogData.map((dog, i) => {
                    const { name, breed, imageLink, likesCount, gender, age, ageValue, location, comment, userName, ownerInfo, purpose, timeStamp } = dog.fields
                    // console.log(typeof(imageLink[0].url))
                    // let {id, url, filename, size, type} = imageLink
                return (
                    <Card 
                        key={dog.id}
                        image={ imageLink[0].url }
                        name={name}
                        breed={breed}
                        purpose={purpose}
                        likesCount={likesCount}
                        gender={gender}
                        age={age}
                        ageValue={ageValue}
                        location={location}
                        username={userName}
                        ownerinfo={ownerInfo}
                        comment={comment}
                        timeStamp={timeStamp}
                    />
                )
                })}
            </div>
        </>
     ): (
        <Spinner />
        )
     ) 
}

export default CardList;


{/* <Swiper {...params}>
                {props.dogData.map((dog, i) => {
                    const { name, breed, imageLink, likesCount, gender, age, ageValue, location, comment, userName, ownerInfo, purpose, timeStamp } = dog.fields
                    // console.log(typeof(imageLink[0].url))
                    // let {id, url, filename, size, type} = imageLink
                return (
                    <div >
                        <img src={imageLink[0].url} className="dogImage" alt="" srcset=""/>
                    </div>
                    // <Card 
                    //     key={dog.id}
                    //     image={ imageLink[0].url }
                    //     name={name}
                    //     breed={breed}
                    //     // purpose={purpose}
                    //     // likesCount={likesCount}
                    //     // gender={gender}
                    //     // age={age}
                    //     // ageValue={ageValue}
                    //     // location={location}
                    //     // username={userName}
                    //     // ownerinfo={ownerInfo}
                    //     // comment={comment}
                    //     // timeStamp={timeStamp}
                    // />
                )
                })}
                </Swiper>  */}