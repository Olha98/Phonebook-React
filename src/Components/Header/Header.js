import React from 'react'
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import css from './Header.module.css'
import UserMenu from '../UserMenu/UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/Selections/authSelector'


const Header = ({ isAuth }) => {




  return (
    <header className={css.header}>
     
        <ul>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Phonebook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink to="/" className={css.navlink_Header} >Home</NavLink>
                </Nav.Link>
                {isAuth && 
                <Nav.Link>
                  <NavLink to="/contacts" className={css.navlink_Header} >Contacts</NavLink>
                </Nav.Link>}


              </Nav>
              <Nav>
                {isAuth ? <Nav.Link><UserMenu /></Nav.Link>
                  : <>
                    <Nav.Link>
                      <NavLink to="/register" className={css.navlink_Header} >Register</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/login" className={css.navlink_Header} >Login</NavLink>
                    </Nav.Link>
                  </>}

              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </ul>
      
    </header>
  )
};

const mapStateToProps = state => ({
  isAuth: authSelectors.isAuthenticated(state),

});



export default connect(mapStateToProps)(Header)


