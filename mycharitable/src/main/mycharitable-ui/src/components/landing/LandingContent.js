import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from '../../assests/Card';

class LandingContent extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <h4 style={{ marginTop: '5%', textAlign: 'center' }} id="whatwedo">What We Do</h4>
                    <MDBRow style={{ marginTop: '5%' }}>
                        <MDBCol md="4">

                        </MDBCol>
                        <MDBCol md="8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ marginTop: '5%' }}>
                        <MDBCol md="8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </MDBCol>
                        <MDBCol md="4">

                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ marginTop: '5%' }}>
                        <MDBCol md="4">

                        </MDBCol>
                        <MDBCol md="8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer style={{marginBottom: '10%'}}>
                    <h4 style={{ marginTop: '5%', textAlign: 'center' }} id="whatwedo">Who We Are?</h4>
                    <MDBRow>
                        <MDBCol md="3" style={{marginTop: '5%'}}>
                            <Card />
                        </MDBCol>
                        <MDBCol md="3" style={{marginTop: '5%'}}>
                            <Card />
                        </MDBCol>
                        <MDBCol md="3" style={{marginTop: '5%'}}>
                            <Card />
                        </MDBCol>
                        <MDBCol md="3" style={{marginTop: '5%'}}>
                            <Card />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default LandingContent;