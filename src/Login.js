import React , { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "'/firebase";
 
function Login() {
    const history = usehistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
    const signIn = e =>  {
    e.preventDefault();

    auth 
         .signInWithEmailAndPassword(email,password)
         .then(auth => {
            history.push('/')
         })
         .catch(error=> alert(error.message))
     
    }    
    const register = e => {
        e.preventDefault();
        auth
         .createUserWithEmailAndPassword(email,password)
         .then((auth) => {
            
            if(auth){
                history.push('/')
            }
         })
         .catch(error=> alert(error.message))
    }
    return (
        <div className ='login'>
           <Link to ='/'>
           <img 
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
/>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange=
                     {e => setEmail(e.target.value)} />  
                        <h5>Password</h5>
                        <input type='Password' value={password} onChange= 
                        {e => setPassword (e.target.value)}/>
                        
                        <button type = 'submit' onClick={SignIn}
                        className='login__signInButton'>Sign In </button>
                    
                    </form>
                    <p>
                            By signing-in you agree to the AMAzon FAKE
                            CLONE Conditions of Use & Sale.Plase 
                            see our Privacy Notice, our Cookies Notice 
                            and our Interest_Based Ads Notice.
                        </p>
                        <button className='login__registerButton'>Create your Amazon Account</button>
                
            </div>
            </div>
    )
}
export default Login
