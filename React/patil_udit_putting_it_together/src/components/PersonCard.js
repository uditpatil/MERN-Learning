import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, LastName, age, hairColor} = props;
    const [personAge, setPersonAge] = useState(age);
    const onclickHandler = (e) =>{
        setPersonAge(personAge + 1)
    }
    return (
        <div>
            <h1> {LastName}, {firstName}</h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={onclickHandler}>Birthaday Button for {firstName} {LastName}</button>
        </div>
    )
}

export default PersonCard;