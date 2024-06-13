/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate.push('/');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">SupplySync</Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
}

export default Header;
