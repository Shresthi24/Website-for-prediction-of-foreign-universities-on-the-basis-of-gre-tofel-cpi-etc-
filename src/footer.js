import React, { Component } from 'react';
import './App.css';
import {  Link } from "react-router-dom";
import oxford from './oxford.jpg';
import mit from './MIT.jpg';
import stanford from './stanford.jpg';
import camb from './camb.jpg';
import { Carousel,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';


class footer extends Component {
  render() {
  

    return (
    <div class="">	
    
       
       <Navbar inverse collapseOnSelect>
       
  <Navbar.Header>
  <Navbar.Brand>
      <Link to="/"> BTP </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavDropdown eventKey={1} title="University" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}> <Link to=""> Oxford </Link> </MenuItem>
        <MenuItem eventKey={1.2}> <Link to=""> MIT </Link> </MenuItem>
        <MenuItem eventKey={1.3}><Link to=""> Stanford </Link> </MenuItem>
        <MenuItem eventKey={1.4}> <Link to=""> Cambridge </Link> </MenuItem>

      </NavDropdown>
      <NavItem eventKey={2} >
      <Link to="form"> 
        Find college
      </Link>
      </NavItem>

      <NavDropdown eventKey={3} title="Suggestion" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}> <Link to="project"> Project based </Link> </MenuItem>
        <MenuItem eventKey={3.2}> <Link to="">  Publication based </Link> </MenuItem>
        <MenuItem eventKey={3.3}> <Link to="">  Internship based </Link> </MenuItem>
 
      </NavDropdown>
    </Nav>
    <Nav pullRight>
     <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}> <Link to="profile"> Profile </Link> </MenuItem>
        <MenuItem eventKey={3.2}> <Link to=""> Setting </Link> </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}> <Link to=""> Logout </Link> </MenuItem>
      </NavDropdown>
    
    </Nav>
  </Navbar.Collapse>

</Navbar>

      
       </div>
    );
  }
}

export default footer;

