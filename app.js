import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

function App() {
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div>
            <button onClick={() => setIsSignup(true)}>Signup</button>
            <button onClick={() => setIsSignup(false)}>Signin</button>

            {isSignup ? <Signup /> : <Signin />}
        </div>
    );
}

export default App;