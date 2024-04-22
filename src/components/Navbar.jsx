import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/KD.png'

const NavbarComp = () => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-white border-gray-100 shadow  p-3  ">
    <Container>
      <Navbar.Brand href="#home" className=" font-medium">
        <img alt='logo' src={logo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="me-auto sm:gap-5 sm:ms-20 text-white">
          <Nav.Link className='font-semibold' href="#home">Home</Nav.Link>
          <Nav.Link className='font-semibold' href="#about">About</Nav.Link>
          <Nav.Link className='font-semibold' href="#skills">Skills</Nav.Link>
          <Nav.Link className='font-semibold' href="#projects">Projects</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp