//import express from 'express';
//import User from '../components/userModel';
//import asyncHandler from 'express-async-handler';
//import jwt from 'jsonwebtoken';
//import UserModel from '../components/userModel'
import users1 from '../components/users'
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css'

  
  // Initialize Firebase
  //const app = initializeApp (firebaseConfig);
 // const firebase = initializeApp;
  

  

//const router = express.Router(); // eslint-disable-line

const AuthenticatePage = props => {

  //  const auth = getAuth(app);
//  const auth1 = firebase.auth();
//  const db = firebase.firestore();

return (
    <React.StrictMode>
        <authenticatePage />
    </React.StrictMode>
);




/*
<body class ="grey lighten-3">
      <nav class ="z-depth-0 grey lighten-4">
        <div class="nav-wrapper container">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li class="logged-in">
                    <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
                </li>
                <li class="logged-in">
                    <a href="#" class="grey-text" id="logout">Logout</a>
                </li>
                <li class="logged-out">
                    <a href="#" class="grey-text modal-trigger" data-target="modal-login">Login</a>
                </li>
                <li class="logged-out">
                    <a href="#" class="grey-text modal-trigger" data-target="modal-signup">Sign Up</a>
                </li>
            </ul>
        </div>
      </nav>
      <div id="modal-signup" class="modal">
          <div class="modal-content">
              <h4>Sign Up</h4><br />
              <form id="signup-form">
                  <div class="input-field">
                      <input type="email" id="signup-email" required />
                      <label for="signup=email">Email Address</label>
                  </div>
                  <div class="input-field">
                    <input type="password" id="signup-password" required />
                    <label for="signup-password">Password..</label>
                  </div>
                  <button class="btn yellow">Sign Up</button>
              </form>
          </div>
      </div>
      <div id="modal-login" class="modal">
          <div class="modal-content">
              <h4>Login</h4><br />
              <form id="login-form">
                  <div class="input-field">
                      <input type="email" id="login-email" required />
                      <label for="login=email">Email Address</label>
                  </div>
                  <div class="input-field">
                    <input type="password" id="login-password" required />
                    <label for="login-password">Password..</label>
                  </div>
                  <button class="btn yellow">Login</button>
              </form>
          </div>
      </div>
      <div id="modal-account" class="modal">
          <div class="modal-content center-align">
              <h4>Account</h4><br />
              <div class="account-details"></div>
              </div>
      </div>

      <script scr="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
      <script scr="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
      <script scr="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>
      <script src="scripts/auth.js"></script>
      <script src="scripts/index.js"></script>
    </body>
*/









    /*
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  const { from } = props.location.state || { from: { pathname: "/movies/favorites" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}/*
      <button onClick={login}>Log in</button>
    </>
  );
};


// Get all users
router.get('/', async (req, res) => {
    const users = await users1.find();
    res.status(200).json(users);
});


// authenticate a user
router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.status(401).json({success: false, msg: 'Please pass username and password.'});
      return next();
    } else {
      const user = await users1.findByUserName(req.body.username);
        if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // if user is found and password matches, create a token
            const token = jwt.sign(user.username, process.env.SECRET);
            // return the information including token as JSON
            res.status(200).json({success: true, token: 'BEARER ' + token});
          } else {
            res.status(401).json({code: 401,msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
  }));
*/
  export default AuthenticatePage;