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
                    {
                        firstName && firstName.length < 2 ? <p>Firstname must be atleast 2 characters</p>:null
                    }
                <div className="form-control">
                    <label>Last Name: </label>
                    <input className="input-field" type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
                </div>
                    {
                        lastName && lastName.length < 2 ? <p>Lastname must be atleast 2 characters</p>:null
                    }
                <div className="form-control">   
                    <label>Email: </label>
                    <input className="input-field" type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                    {
                        email && email.length < 5 ?<p>Email must be atleast 5 characters</p>:null
                    }
                <div className="form-control">
                    <label>Password: </label>
                    <input className="input-field" type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </div>
                    {
                        password && password.length < 8 ?<p>Password must be atleast 8 characters</p>:null
                    }
                <div className="form-control">
                    <label>Confirm Password: </label>
                    <input className="input-field" type="password" onChange={(e)=> setConfirmPass(e.target.value)} value={confirmPass}/>
                </div>
                    {
                        password !== confirmPass ? <p>Passwords must match</p>:null
                    }
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PersonForm;