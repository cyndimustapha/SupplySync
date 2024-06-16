/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home" style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '2.0rem'}}>SupplySync</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
