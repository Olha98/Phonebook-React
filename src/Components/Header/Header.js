import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from '../../routes'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import css from './Header.module.css'



const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Phonebook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink to={routes.home}  className={css.navlink_Header}>Home</NavLink>
                  </Nav.Link>
                <Nav.Link>
                  <NavLink to={routes.register}>Register</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={routes.login}>Login</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={routes.contacts}>Contacts</NavLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="logining">
                  LOGIN</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </ul>
      </nav>
    </header>
  )
};
export default Header

