import React from 'react';
import './Header.css';
import logo from '../../Assests/12.png';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const handleScroll = () => {
    const aboutUs = document.getElementById('aboutUs');
    aboutUs.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link hover-black item">
              Home
            </Nav.Link>
            <Nav.Link
              className="about nav-link hover-black item"
              onClick={handleScroll}
            >
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link hover-black item">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/booking" className="nav-link hover-black item">
              BOOK NOW
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
