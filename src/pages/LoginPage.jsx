/* eslint-disable no-unused-vars */
import React from 'react';
import Login from '../components/Login';
import { Container, Row, Col } from 'react-bootstrap';

function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
