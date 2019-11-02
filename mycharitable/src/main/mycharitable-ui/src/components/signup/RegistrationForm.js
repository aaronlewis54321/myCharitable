import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBAnimation, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import RegistrationSuccess from './RegistrationSuccess';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            ebtNumber: '',
            modal: false,
            modalMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var field = document.getElementsByName(name);

        field[0].addEventListener('keypress', function (event) {
            var key = event.keyCode;
            if (key === 32) {
                event.preventDefault();
            }
        });


        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        var md5 = require('md5');
        var passwordHash = md5(this.state.password).substring(0, 6);
        const createUserResponse = await fetch(`/api/users/createUser?email=${encodeURIComponent(this.state.email)}&password=${encodeURIComponent(passwordHash)}&fName=${encodeURIComponent(this.state.firstName)}&lName=${encodeURIComponent(this.state.lastName)}&phoneNumber=${encodeURIComponent(this.state.phoneNumber)}&ebtNumber=${encodeURIComponent(this.state.ebtNumber)}`);
        const createUserJson = await createUserResponse.json();
        console.log(createUserJson);
        if(createUserJson.status === 500) {
            this.setState({ modalMessage: 'An account with that email already exists. Please use another email.'});
            this.toggle();
        }
        this.props.callback(<RegistrationSuccess firstName={this.state.firstName} />)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBContainer>
                        <h3 style={{ textAlign: "center", marginTop: '5%' }}>Sign Up!</h3>

                        <MDBAnimation type="fadeIn" duration="1s" delay="0.5s">
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol md="12" style={{ textAlign: 'center' }}>
                                    <h5>Your Login Info</h5>
                                    <hr></hr>
                                    <p>Here you will input your account information. This will be the information you use to actually log in to your account.</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" duration="1s" delay="1s">
                            <form onSubmit={this.handleSubmit}>
                                <MDBRow style={{ marginTop: '5%' }} className="justify-content-center">
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
                                                    name="ebtNumber"
                                                    required
                                                    onChange={this.handleChange}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="justify-content-center" style={{ marginBottom: '5%' }}>
                                    <MDBBtn color="success" type="submit">Register</MDBBtn>
                                </MDBRow>
                            </form>
                        </MDBAnimation>
                    </MDBContainer>
                </MDBAnimation>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}><span style={{ color: 'black' }}>Oops!</span></MDBModalHeader>
                    <MDBModalBody>
                        <span style={{ color: 'black' }}>{this.state.modalMessage}
                            <br></br>
                            <br></br>
                            Wish you the best!
                            </span>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default RegistrationForm;