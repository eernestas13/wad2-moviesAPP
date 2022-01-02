// import React, {useRef, useState} from 'react'
// import { Form, Button, Card, Alert } from 'react-bootstrap'
// import { AuthProvider, useAuth } from '../contexts/authContext'
// import { Link, useHistory } from 'react-router-dom'

// export default function LoginPage() {

//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const { login, currentUser } = useAuth()
//     const [error, setError] = useState(' ')
//     const [loading, setLoading] = useState(false)
//     const history = useHistory()

//     async function handleSubmit(e) {
//         e.preventDefault()


//         try {
//             setError('')
//             setLoading(true)
//         await login(emailRef.current.value, passwordRef.current.value)
//         history.push("/")
//         } catch {
//             setError('Failed to sign in')
//         }
//         setLoading(false)
//     }

//     return (
//         <AuthProvider>
//         <>
//         <Card>
//             <Card.Body>
//                 <h2 className="text-center mb-4">Login</h2>
                
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} required />
//                     </Form.Group>
//                     <Form.Group id="password">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" ref={passwordRef} required />
//                     </Form.Group>
//                     <Button disabled={loading} className="w-100" type="submit">Login</Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//         <div className="w-100 text-center mt-2">
//             Need an account? <Link to="/signup">Sign Up</Link>
//         </div>
//         </>
//         </AuthProvider>
//     )
// }


import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from 'react-bootstrap'

const LoginPage = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    // Set 'from' to path where browser is redirected after a successful login.
    // Either / or the protected path user tried to access.
    const { from } = props.location.state || { from: { pathname: "/" } };

    if (context.isAuthenticated === true) {
        return <Redirect to={from} />;
    }
    return (
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Login</h2>
            <p>You must log in to view the protected pages </p>
            <input id="username" placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input id="password" type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            {/* Login web form  */}
            <button onClick={login}>Log in</button>
            <p>Not Registered?
                <Link to="/signup">Sign Up!</Link></p>
                </Card.Body>
                </Card>
        </>
    );
};

export default LoginPage;
