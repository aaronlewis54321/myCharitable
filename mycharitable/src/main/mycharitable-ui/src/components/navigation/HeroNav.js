import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { MDBIcon, MDBBtn, MDBNavItem, MDBNavLink } from 'mdbreact';
import {HashLink as Link} from 'react-router-hash-link';



class HeroNav extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={3} md={7}>
                            <MDBIcon icon="utensils" size="3x" />
                        </Col>
                        <Col xs={9} md={5}>
                            <Nav defaultActiveKey="/home" as="ul" className="justify-content-end">
                                <MDBNavItem>
                                    <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/login">Log In</MDBNavLink>
                                </MDBNavItem>
                                <Nav.Item as="li">
                                    <MDBBtn outline color="white" size="sm"><Link to="/#whatwedo" className="whatwedolink">What We Do?</Link></MDBBtn>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeroNav;