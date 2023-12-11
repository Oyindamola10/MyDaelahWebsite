
import "./Contact.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log('handle.....')

    try {
      console.log('Submitting form data:', { name, email, message,phone,subject });
      const response = await fetch("http://localhost:8088/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email,phone, subject, message }),
      });

      const data = await response.json();
          if (data.success) {
            alert('contact successful.');
            console.log("contact...")
          }
          navigate('/')
        
        } catch (error) {
          console.error('Error:', error);
        }

    // Optionally reset form fields after submission
    // setName('');
    // setEmail('');
    // setPhone('');
    // setSubject('');
    // setMessage('');
  };

  return (
    <>
      <div className="container parentCon">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h4>Contact Us</h4>
            <hr />
            <div className="myIcons">
              <div class="contact-item">
                <i className="fa fa-address-book" id="myIcon" />
                <p id="contact-p">Contact Us</p>
              </div>
              <div className="contact-item">
                <i className="fa fa-phone" id="myIcon" />
                <p>08176919801</p>
              </div>
              <div className="contact-item">
                <i class="fa fa-envelope" id="myIcon" />
                <a href="">daelahcollectibles@gmail.com</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-8">
            <div>
              <p id="form-title">
                Fill out the form below and a representative will contact you by
                e-mail or phone within 24 business hours.
              </p>
            </div>
            <div>
              <Form onSubmit={(e) => handleFormSubmit(e)}>
                <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                   
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" 
                
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                  />
                </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number"
                   
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Subject</Form.Label>
                  <Form.Control as="textarea" rows={3} 
                  
                   value={subject}
                   onChange={(e) => setSubject(e.target.value)}
                   required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3}
                
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   required
                  />
                 </Form.Group>
                 <div className="spaceFile">
                 <Form.Label>File</Form.Label>
                 <Form.Control
                 type="file"
                 required
                 name="Select File"/>
                 </div> 
              </Form>
                
            </div>
             <div className="btn-submit">
                <button type="submit" id="btnSub" 
                
                >Submit File</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
