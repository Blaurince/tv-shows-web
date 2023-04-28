import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login ({setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate

    const handleLogin = (e) => {
        e.preventDefault();

        fetch("https://tv-shows-api-c10.web.app/login", {
         method: "POST",
         headers: {"content-type": "application.json"},
         body: JSON.stringify({email, password })
        }
        )

    }

    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label htmlFor="login">Login
            <input />

            </label>


        </form>
        </>
    )
}


