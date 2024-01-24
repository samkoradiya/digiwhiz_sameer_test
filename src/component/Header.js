import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from './SearchForm';

const Header = () => {

  const handleSearchClick  = () =>{
    document.body.classList.add('search-active');
  }



  return (
    <header>
        <div className='top-header'>
            <div className='container'>
                <p><a href="#">Have any question?</a></p>
                <ul className='top-contact-row'>
                   <li><a href="#"><img src="/images/mail.png" alt="mail"/>contact@mail.com</a></li> 
                   <li><a href="#"><img src="/images/phone.png" alt="phone"/>+080 0444 333 444</a></li> 
                </ul>
            </div>
        </div>

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary main-header">
      <Container>
     
        <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="logo" />
        </Navbar.Brand>
        <div className='menu-row'>
        <div className='header-search' >
            <a href="#" onClick={handleSearchClick}>
                 <img src="/images/search.png" alt="Search" />
            </a>
            <SearchForm />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='menu-cover'>
          <Nav className='menu'>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Feature">Feature</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Page">Page</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header