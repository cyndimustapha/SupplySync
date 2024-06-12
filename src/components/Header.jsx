/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
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
