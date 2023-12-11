import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  //handle login 
  const handleLogin = async () => {
    console.log('Handling login...');
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    try {
      const response = await fetch("http://localhost:8088/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
          if (data.success) {
            alert('log in successful.');
            
          }
          navigate('/')
        
        } catch (error) {
          console.error('Error:', error);
        }
  }
  

  return (
    <>
    <div className='login'>
       <div className='boxs'>
        <h1>DaelahCollectibles</h1>
        {/* <h4>Login.</h4> */}
        <p id='signUpP'>Login to your account to continue</p>
        <div className='forms'>
            <div>
                <Form.Label>Username</Form.Label>
                <Form.Control id='username' size='lg' type='text' placeholder='Enter Your Username'
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 required
                />
            </div>
            <div>
                <Form.Label htmlFor='inputPasswords'>Password</Form.Label>
                <Form.Control id='password' size='lg' type='password' placeholder='Enter Your Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
               />
            </div>
            <a id='links' href="/signUp">Forgot your password?</a>
            <button type="button" onClick={handleLogin}>Log In</button>
            <p id='signUpP'>Don't have an account? <a id="links" href="/SignUp"><span>Sign Up</span></a></p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Login