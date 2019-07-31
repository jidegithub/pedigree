import React from 'react';
import Card from './Card';


 const CardList = (props) => {

     return (
        <>
            <div>
                {props.dogData.map((dog, i) => {
                    const { name, breed, imageLink, likesCount, gender, age, ageValue, location, comment, userName, ownerInfo, purpose } = dog.fields
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
                    />
                )
                })} 
            </div>
        </>
     )
}

export default CardList