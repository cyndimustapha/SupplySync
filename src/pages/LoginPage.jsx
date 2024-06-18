import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from '../components/Login';
import Registration from '../components/Registration';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ minHeight: '100vh'}}>
        <Col md={6} className="mt-auto mb-auto">
          {isLogin ? <Login /> : <Registration />}
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
