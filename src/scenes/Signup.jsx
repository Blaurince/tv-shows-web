import { useState } from "react";

export default function Signup ({setUser}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        fetch("https.//tv-shows-api-c10s.web.app/signup", {
         method: "POST",
         headers : {"content-Type": "application.json"},  
         body: JSON.stringify({email, password})
        }
        )

        
    }

    return (
        <>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email
            <input 
            type="email"
            value={email}
            onChange={ (e) => {setEmail(e.target.value)}} />
        </label>

        <br />

        <label htmlFor="password">Password
            <input 
            type="password"
            value={password} 
            onChange={ (e) => {setPassword(e.target.value)}} />

        </label>

       <br />
     </form>
        </>
    )


}