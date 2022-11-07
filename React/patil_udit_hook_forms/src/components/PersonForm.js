import React, {useState} from 'react';

const PersonForm = (props) =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPass
        };
        
        console.log("welcome , ", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        }
    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                <div className="form-control">
                    <label>First Name: </label>
                    <input className="input-field" type="text" onChange={(e)=> setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div className="form-control">
                    <label>Last Name: </label>
                    <input className="input-field" type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className="form-control">   
                    <label>Email: </label>
                    <input className="input-field" type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-control">
                    <label>Password: </label>
                    <input className="input-field" type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </div>
                <div className="form-control">
                    <label>Confirm Password: </label>
                    <input className="input-field" type="password" onChange={(e)=> setConfirmPass(e.target.value)} value={confirmPass}/>
                </div>
                <input type="submit"/>
            </form>
            <br />
            <div>
                <h4>Your form data</h4>
                <p>First Name <span className="span-class" >{firstName}</span></p>
                <p>Last Name <span className="span-class" >{lastName}</span></p>
                <p>Email <span className="span-class" >{email}</span></p>
                <p>Password <span className="span-class" >{password}</span></p>
                <p>confirmPass <span className="span-class" >{confirmPass}</span></p>
            </div>
        </div>
    )
}

export default PersonForm;