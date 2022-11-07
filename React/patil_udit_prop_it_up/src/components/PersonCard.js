import React from 'react';

const PersonCard = (props) => {
    const {firstName, LastName, age, hairColor} = props;
    return (
        <div>
            <h1> {LastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;