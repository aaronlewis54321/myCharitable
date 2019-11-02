import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBNavLink, MDBAnimation } from 'mdbreact';

class RegistrationSuccess extends Component {
    render() {
        return (
            <div>
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBContainer style={{marginTop: '5%'}}>
                        <MDBRow>
                            <h4>Thanks for registering, {this.props.firstName}!</h4>
                        </MDBRow>
                        <MDBRow>
                            <p>You can go to the following link in order to login to you account.</p>
                            <MDBNavLink to="/login">Login</MDBNavLink>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
            </div>
        );
    }
}

export default RegistrationSuccess;