import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import {FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import "../App.css";

 function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login w-25 p-3 m-auto">
      <Form onSubmit={handleSubmit} >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
            <Button block="true" size="lg" type="submit" className="w-25 mt-2" disabled={!validateForm()}>
          Login
        </Button>
        </div>
        
      </Form>
    </div>
  );
};

export default LoginPage;