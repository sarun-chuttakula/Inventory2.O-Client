import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MainNavbar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Fetch</Nav.Link>
            <NavDropdown title='Assets' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Laptop</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Desktop</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Monitor</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Keyboard</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>Mouse</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.6'>
                Tab/iPad/Mobile
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.7'>Printer</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.8'>Router</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
