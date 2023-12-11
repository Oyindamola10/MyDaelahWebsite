import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const SignUp = () => {
    const [signupFullname, setSignupFullname] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPhone, setSignupPhone] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
    const navigate = useNavigate();
    // const [error, setError] = useState('');


    const handleSignup = async () => {
        // if ( !fullname || !username || !email || !phone || !password || !confirmPassword ) {
        //     setError('Please fill out all fields.') 
        //     return;
        // }
       
        console.log('Handling signup...');
        try {
          const response = await fetch("http://localhost:8088/api/signUp", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fullname: signupFullname,
              username: signupUsername,
              email: signupEmail,
              phone: signupPhone,
              password: signupPassword,
              confirmPassword: signupConfirmPassword,
            }),
          });
    
          const data = await response.json();
          if (data.success) {
            alert('Signup successful. Please try again.');
            
          }
          navigate('/login')
        
        } catch (error) {
          console.error('Error:', error);
        }
      };
    

  return (
    <>
    <div className='signup'>
       <div className='signs'>
        <h1>DaelahCollectibles</h1>
        <h3>Create Account.</h3>
        <div>
            <Form.Label>Fullname*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Fullname'
             value={signupFullname}
             onChange={(e) => setSignupFullname(e.target.value)}
             required
            />
        </div>
        <div>
            <Form.Label>Username*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Username'
             value={signupUsername}
             onChange={(e) => setSignupUsername(e.target.value)}
             required
            />
        </div>
        <div>
            <Form.Label>Email*</Form.Label>
            <Form.Control id='input' size='lg' type='emal' placeholder='Enter Your Email'
             value={signupEmail}
             onChange={(e) => setSignupEmail(e.target.value)}
             required
            />
        </div>
        <div>
            <Form.Label>Phone*</Form.Label>
            <Form.Control id='input' size='lg' type='number' placeholder='Enter Your Phone Number'
             value={signupPhone}
             onChange={(e) => setSignupPhone(e.target.value)}
             required
            />
        </div>
        <div>
            <Form.Label>Password*</Form.Label>
            <Form.Control id='input' size='lg' type='password' placeholder='Enter Your Password'
             value={signupPassword}
             onChange={(e) => setSignupPassword(e.target.value)}
             required
            />
        </div>
        <div>
            <Form.Label>Confirm Password*</Form.Label>
            <Form.Control id='input' size='lg' type='password' placeholder='Enter Your Password'
             value={signupConfirmPassword}
             onChange={(e) => setSignupConfirmPassword(e.target.value)}
             required
            />
        </div>
        <div>
            <input type='checkbox' id='terms'/>
        </div>
            <button type="submit" onClick={handleSignup}>Create My Account</button>
            <p id='signUpP'>Already have an account? <a href="/Login">Sign In</a></p>
       </div>
    </div>
    </>
  )
}

export default SignUp