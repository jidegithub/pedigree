import React from 'react';
import Card from './Card';
import Spinner from './spinner';
import Swiper from 'react-id-swiper';


 const CardList = (props) => {

     return (
         props.dogData.length ? (
        <>
            <div className="super-parentContainer">
                <Swiper>
                {props.dogData.map((dog, i) => {
                    const { name, breed, imageLink, likesCount, gender, age, ageValue, location, comment, userName, ownerInfo, purpose, timeStamp } = dog.fields
                    // console.log(typeof(imageLink[0].url))
                    // let {id, url, filename, size, type} = imageLink
                return (
                    <div>
                        <img src={imageLink[0].url} alt="" srcset=""/>
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
                </Swiper> 
            </div>
        </>
     ): (
        <Spinner />
        )
     ) 
}

export default CardList