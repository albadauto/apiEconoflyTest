import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './style.css';

export default function Header() {
  return (
    <Navbar  variant="dark" className='navmain' >
    <Container >
    <Navbar.Brand href="#home">Sistema</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
