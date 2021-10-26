import './Login.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { auth } from './firebase.js'
import { useStateValue } from './StateProvider'
import { db } from "./firebase";


function Login() {

    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();


    function login(){
      let username = document.getElementById('usernameLogin').value
      let password = document.getElementById('passwordLogin').value

      auth
        .signInWithEmailAndPassword(username, password)
        .then((auth) => {
          history.push('/home')
          dispatch({
            type: "SET_USER",
            user: username
          });
        })
        .catch(error => alert(error.message))
    }

    function createAccount(){
      let username = document.getElementById('usernameCreateAccount').value
      let password = document.getElementById('passwordCreateAccount').value



      auth
        .createUserWithEmailAndPassword(document.getElementById('usernameCreateAccount').value, document.getElementById('passwordCreateAccount').value)
        .then((auth) => {

          db
          .collection(username)
          .doc('numOrder')
          .set({
            numOrder: 0
          })

          history.push('/home')
          dispatch({
            type: "SET_USER",
            user: username,
          });

        })
        .catch(error => alert(error.message))


    }

    return (
      <div className="Login">
        <input id='usernameLogin' placeholder='Username'/>
        <br/>
        <input id='passwordLogin' placeholder='Password'/>
        <br/>
        <br/>
        <Button className='Buttons' id="loginButton" variant="contained" onClick={login}>Login</Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <input id='usernameCreateAccount' placeholder='Username'/>
        <br/>
        <input id='passwordCreateAccount' placeholder='Password'/>
        <br/>
        <br/>
        <Button className='Buttons' id="createAccountButton" variant="contained" onClick={createAccount}>Create Account</Button>

      </div>
    );


}


export default Login;
