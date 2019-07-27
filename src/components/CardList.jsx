import React from 'react';
import Card from './Card';


 const CardList = (props) => {

     return (
        <>
            <div>
                {props.dogData.map((dog, i) => {
                    const { name, breed, imageLink, likesCount, gender, age, location, comment, userName, ownerInfo } = dog.fields
                    // console.log(typeof(imageLink[0].url))
                    // let {id, url, filename, size, type} = imageLink
                return (
                    <Card 
                        key={dog.id}
                        image={ imageLink[0].url }
                        name={name}
                        breed={breed}
                        likesCount={likesCount}
                        gender={gender}
                        age={age}
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