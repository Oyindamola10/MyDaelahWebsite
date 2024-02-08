import React from "react";
import Form from "react-bootstrap/Form";
// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import "./Search.css";

const CheckOutPage = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="parentCon">
            <div className="col-sm-12 col-md-6">
              <div className="CheckoutPage">
                <h4>
                  <a href="">Create A New Account</a>
                </h4>
                <Form className="theForms">
                  <Form.Group
                    className="mb-3"
                    controlId="formGroupEmail"
                    id="theEmail"
                  >
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
                <p id="shop">
                  Shopped with us before?
                  <a href="/Login">Log into your account</a>
                </p>

                <h4>
                  <a href="">Billing Address</a>
                </h4>
                <div>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Add your address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Add a second address" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Oyo</option>
                          <option>Rivers</option>
                          <option>Ogun</option>
                          <option>Imo</option>
                          <option>Abia</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
                <div>
                  <h4>
                    <a href="">Shipping Information</a>
                  </h4>
                  <div className="theFormGroup">
                    <Form>
                    <Form.Group className="mb-3" id="theGridBox1" >
                      <Form.Check type="checkbox" label="Same as billing address" />
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3" id="theGridbox">
                      <Form.Check type="checkbox" label="Use different shipping address" />
                    </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
