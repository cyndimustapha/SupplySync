import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Simulate an API call
    const response = await fakeAuthApi(email, password);
    if (response.success) {
      localStorage.setItem('token', response.token); // Save the token
      history.push('/home'); // Redirect to dashboard
    } else {
      setError(response.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </Form>
  );
}

const fakeAuthApi = async (email, password) => {
  // This is a fake API call. Replace with your actual authentication API call.
  if (email === 'test@example.com' && password === 'password') {
    return { success: true, token: 'fake-jwt-token' };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
};

export default Login;
