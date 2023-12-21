import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MainNavbar() {
  return (
    <Navbar expand='lg' className='navbar-light bg-dark'>
      <Container>
        <Navbar.Brand href='/home' className='navbar-brand text-light'>
          XELP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/home' className='text-light'>
              HOME
            </Nav.Link>
            <NavDropdown
              title='ITEMS'
              id='basic-nav-dropdown'
              className='text-white'
            >
              <NavDropdown.Item href='/home/Laptop'>Laptop</NavDropdown.Item>
              <NavDropdown.Item href='/home/Desktop'>Desktop</NavDropdown.Item>
              <NavDropdown.Item href='/home/Monitor'>Monitor</NavDropdown.Item>
              <NavDropdown.Item href='/home/Keyboard'>
                Keyboard
              </NavDropdown.Item>
              <NavDropdown.Item href='/home/Mouse'>Mouse</NavDropdown.Item>
              <NavDropdown.Item href='/home/Tab'>
                Tab/iPad/Mobile
              </NavDropdown.Item>
              <NavDropdown.Item href='/home/Printer'>Printer</NavDropdown.Item>
              <NavDropdown.Item href='/home/Router'>Router</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/home/fetch' className='text-light'>
              Fetch
            </Nav.Link>
            <Nav.Link href='/logout' className='text-light'>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
