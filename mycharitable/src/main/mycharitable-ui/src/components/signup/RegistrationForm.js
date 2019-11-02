import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBAnimation } from 'mdbreact';

class RegistrationForm extends Component {
    render() {
        return (
            <div>
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBContainer>
                        <h3 style={{ textAlign: "center", marginTop: '5%' }}>Sign Up!</h3>
                        <MDBAnimation type="fadeIn" duration="1s" delay="0.5s">
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol md="4">
                                    <h5>Your Login Info</h5>
                                    <hr></hr>
                                    <p>Here you will input your account information. This will be the information you use to actually log in to your account.</p>
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBInput
                                                label="First Name*"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="firstName"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBInput
                                                label="Last Name*"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="lastName"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <MDBInput
                                                label="Email*"
                                                icon="at"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="email"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                label="Password*"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="password"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                label="Phone Number*"
                                                icon="phone"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="phoneNumber"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                label="EBT Number*"
                                                icon="address-card"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="phoneNumber"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                    </MDBContainer>
                </MDBAnimation>

            </div>
        );
    }
}

export default RegistrationForm;