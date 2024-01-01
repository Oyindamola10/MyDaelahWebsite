import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css'

const SignUp = () => {
    const [signupFirstname, setSignupFirstname] = useState('');
    const [signupLastname, setSignupLastname] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPhone, setSignupPhone] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
    const navigate = useNavigate();
    // const [error, setError] = useState('');


    const handleSignup = async () => {
        console.log('Handling signup...');
        if (signupPassword !== signupConfirmPassword){
            alert("Please confirm your passwords are the same")
        }
else
        try {
          const response = await fetch("http://localhost:8088/api/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: signupFirstname,
             lastName: signupLastname,
              username: signupUsername,
              email: signupEmail,
              phone: signupPhone,
              password: signupPassword,
            }),
          });

          const data = await response.json();
          if (data.success) {
            alert('Signup successful.');

          }
          //navigate('/login')

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
            <Form.Label>Firstname*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Firstname'
             value={signupFirstname}
             onChange={(e) => setSignupFirstname(e.target.value)}
             required
            />
        </div>

           <div>
            <Form.Label>Lastname*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Lastname'
             value={signupLastname}
             onChange={(e) => setSignupLastname(e.target.value)}
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
            <Form.Control id='input' size='lg' type='password' placeholder='Confirm Password'
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
