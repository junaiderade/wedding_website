import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../App.css'



class Nav_1 extends Component{


    render(){
        return(
            <div>
                <Navbar   bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Chapter 1: The Wedding</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Our Story</Nav.Link>
                        <Nav.Link href="#link">Quiz</Nav.Link>
                        <Nav.Link href="#link">Schedule</Nav.Link>
                        <Nav.Link href="#link">Registry and Gifts</Nav.Link>
                        <Nav.Link href="#link">RSVP</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>              
        )
    }
}

export default Nav_1;