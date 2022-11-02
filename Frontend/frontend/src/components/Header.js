import React from 'react'
import {Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }} >
      <Container>
        <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Nav>
          <Link to='/Checkout'>
            <Badge bg='transparent'>10</Badge>
            <AiOutlineShoppingCart color='white' fontSize='25px'/>
          </Link> 
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
