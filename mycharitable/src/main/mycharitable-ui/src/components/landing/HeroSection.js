import React, { Component } from 'react';
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBAnimation, MDBNavLink, MDBBtn } from 'mdbreact';
import HeroNav from '../navigation/HeroNav';

class HeroSection extends Component {
    render() {
        return (
            <div className="hero-section">
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBJumbotron fluid>
                        <MDBAnimation type="fadeIn" duration="1s" delay="0.5s">
                            <MDBContainer>
                                <HeroNav />
                                <MDBRow style={{ textAlign: 'center', marginTop: '15%' }}>
                                    <MDBCol md="2"></MDBCol>
                                    <MDBCol md="8">
                                        <h1>Welcome to myCharitable</h1>
                                        <hr></hr>
                                        <h3>An Easy Way to Claim Your Meals</h3>
                                        <MDBBtn rounded outline color="white" style={{ marginTop: '2%' }}><MDBNavLink to="/signup" className="getstartedlink" style={{ fontSize: '0.8em', textDecoration: 'none', color: 'white' }}>Get Registered</MDBNavLink></MDBBtn>
                                    </MDBCol>
                                    <MDBCol md="2"></MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBAnimation>
                    </MDBJumbotron>
                </MDBAnimation>
            </div>
        );
    }
}

export default HeroSection;