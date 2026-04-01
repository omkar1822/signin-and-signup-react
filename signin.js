import React, { useState } from "react";

function Signin() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", login);
        alert("Login Successful");
    };

    return (
        <div>
            <h2>Signin</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                <button type="submit">Signin</button>
            </form>
        </div>
    );
}

export default Signin;