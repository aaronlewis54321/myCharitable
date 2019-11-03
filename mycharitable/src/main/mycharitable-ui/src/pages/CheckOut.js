import React, { Component } from 'react';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { QRCode } from "react-qr-svg";

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkToCart: ''
        }

    }

    async componentDidMount() {
        const { email } = this.props.match.params;
        const { isloggedin } = this.props.match.params;
        const { cart } = this.props.match.params;

        console.log("Email: " + email + "   isLoggedIn: " + isloggedin + "   cart: " + cart);

        const setCartResponse = fetch(`/api/users/setCart?email=${encodeURIComponent(email)}&isLoggedIn=${encodeURIComponent(isloggedin)}&cart=${encodeURIComponent(cart)}`);
        const setCartJson = await setCartResponse.json();
        console.log("setCartJson");
        if (setCartJson.status === 403) {
            alert('You must be logged in!');
        } else {
            const getCartResponse = await fetch(`/api/users/getCart?email=${encodeURIComponent(email)}`);
            this.setState({
                linkToCart: "http://mycharitable.eastus.cloudapp.azure.com:8080/api/users/getCart?email=" + encodeURIComponent(email)
            });
        }


    }

    render() {
        return (
            <div>
                <NavBar />
                <MDBContainer>
                    <MDBRow style={{marginTop: '5%'}}>
                        <MDBCol md="12">
                            <h4>Screenshot this QR Code to show to your vendor!</h4>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{marginTop: '5%'}}>
                        <MDBCol md="2"></MDBCol>
                        <MDBCol md="8">
                            <QRCode
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                level="Q"
                                style={{ width: 256 }}
                                value={this.state.linkToCart} />
                        </MDBCol>
                        <MDBCol md="2"></MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        );
    }
}

export default CheckOut;