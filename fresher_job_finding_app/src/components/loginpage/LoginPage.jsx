// LoginPage.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend login endpoint
      const response = await fetch('YOUR_BACKEND_URL/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful login
        setShowAlert(false); // Clear any previous error alert
        console.log('Login successful!');
        // Redirect or perform any other actions after successful login
      } else {
        // Unsuccessful login
        setShowAlert(true);
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setShowAlert(true);
    }
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} className="login-form-container">
            <h2 className="text-center mb-4">Job Finder Login</h2>
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                Invalid email or password. Please try again.
              </Alert>
            )}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <div className='submit_button'>
              <Button variant="primary" type="submit" block>
                Login
              </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
