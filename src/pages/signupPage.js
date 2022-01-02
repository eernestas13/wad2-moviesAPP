import React, {useRef, useState, useContext} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { AuthContext, useAuth } from '../contexts/authContext'
import { Link, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Save } from '@material-ui/icons'


export const signup = (username, password) => {
    return Save('/api/seedData/users?action=register', {
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password})
    }).then(res => res.json())
};


const SignupPage = props =>  {

    const context = useContext(AuthContext)

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const { signup, currentUser } = useAuth()
    // const [error, setError] = useState(' ')
    // const [loading, setLoading] = useState(false)
    // const history = useHistory()

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const register = () => {
        if (password.length > 0 && password === passwordAgain) {
            context.register(userName, password);
            setRegistered(true);
    //        signup(true);
        }
    }

    

    const { from } = props.location.state || { from: { pathname: "/" } };

    if (registered === true) {
        return <Redirect to="./login" />;
    }


    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Password Dont Match')
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //     await signup(emailRef.current.value, passwordRef.current.value)
    //     history.push("/")
    //     } catch {
    //         setError('Failed to create account')
    //     }
    //     setLoading(false)
    // }


    return (
        <>
        <Card>
        <Card.Body>
            <Form>
            <h2 className="text-center mb-4">Sign Up</h2>
            <p className="text-center mb-4">You must register a username and password to log in </p>
    
            <Form.Group className="text-center mb-4" id="email">
            <Form.Label>Username</Form.Label>
            <input value={userName} placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            </Form.Group>
    
            <Form.Group className="text-center mb-4" id="email">
            <Form.Label>Password</Form.Label>
            <input value={password} type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            </Form.Group>
    
            <Form.Group className="text-center mb-4" id="email">
            <Form.Label>Password Again</Form.Label>
            <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
                setPasswordAgain(e.target.value);
            }}></input><br />
            </Form.Group>
    
            {/* Login web form  */}
            <Button onClick={register}>Register</Button>
            </Form>
            </Card.Body>
            </Card>
        </>
    );
    
        };
    export default SignupPage;
//         <>
//         <Card>
//             <Card.Body>
//                 <h2 className="text-center mb-4">Sign Up</h2>
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
//                     <Form.Group id="password-confirm">
//                         <Form.Label>Password Confirmation</Form.Label>
//                         <Form.Control type="password" ref={passwordConfirmRef} required />
//                     </Form.Group>
//                     <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//         <div className="w-100 text-center mt-2">
//             Already have an account? <Link to ="/login">Log in</Link>
//         </div>
//         </>
        
//     )
// }






/*
<input value={password} type="password" placeholder="password" onChange={e => {
                    setPassword(e.target.value);
                }}></input><br />

                <input value={userName} placeholder="user name" onChange={e => {
                    setUserName(e.target.value);
                }}></input><br />
                
                <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
                    setPasswordAgain(e.target.value);
                }}></input><br />



                <Form.Group className="text-center mb-4" >
                         <Form.Label>Username</Form.Label>
                         <Form.Control id="username" type="user name" required onChange={e => {
                    setUserName(e.target.value); }}/>
                     </Form.Group>

                
                        <Form.Group className="text-center mb-4" >
                         <Form.Label>Password</Form.Label>
                         <Form.Control id="password" type="password" required onChange={e => {
                    setPassword(e.target.value); }} />
                     </Form.Group>

                    
                     <Form.Group className="text-center mb-4" id="password-confirm">
                         <Form.Label>Password Confirmation</Form.Label>
                         <Form.Control input value={passwordAgain} type="password" onChange={e => {
                    setPasswordAgain(e.target.value); }}/>
                     </Form.Group>
*/