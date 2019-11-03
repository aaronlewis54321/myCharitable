import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBAnimation, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import InventoryView from '../accounthome/InventoryView';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        const retrieveUserResponse = await fetch(`/api/users/getUser?email=${encodeURIComponent(this.state.email)}&password=${encodeURIComponent(passwordHash)}`);
        const retrieveUserJson = await retrieveUserResponse.json();
        console.log(retrieveUserJson);
        if(retrieveUserJson.status === 404) {
            this.setState({ modalMessage: 'This user email does not exist! Please go to the sign up page to create an account.'});
            this.toggle();
        } else if (retrieveUserJson.status === 403) {
            this.setState({ modalMessage: 'You have entered the incorrect password. Please try again.'});
            this.toggle();
        } else {
                //console.log("should run callback");
                this.props.callback(<InventoryView firstName={retrieveUserJson.fname} email={retrieveUserJson.email}/>);
        }
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
                    <MDBContainer style={{marginBottom: '20%'}}>
                        <h3 style={{ textAlign: "center", marginTop: '5%' }}>Log In!</h3>

                        <MDBAnimation type="fadeIn" duration="1s" delay="0.5s">
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol md="12" style={{ textAlign: 'center' }}>
                                    <h5>Enter Login Info</h5>
                                    <hr></hr>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" duration="1s" delay="1s">
                            <form onSubmit={this.handleSubmit}>
                                <MDBRow style={{ marginTop: '5%' }} className="justify-content-center">
                                    <MDBCol md="8">
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
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="justify-content-center" style={{ marginBottom: '10%' }}>
                                    <MDBBtn color="indigo lighten-1" type="submit" style={{color: 'white'}}>Login</MDBBtn>
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

export default Login;