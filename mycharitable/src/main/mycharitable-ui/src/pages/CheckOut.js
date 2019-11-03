import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';

class CheckOut extends Component {
    constructor(props){
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
        if(setCartJson.status === 403) {
            alert('You must be logged in!');
        } else {
            const getCartResponse = await fetch(`/api/users/getCart?email=${encodeURIComponent(email)}`);
            this.setState({
                linkToCart: "http://mycharitable.eastus.cloudapp.azure.com:8080/api/users/getCart?email=" + email
            });
        }


    }

    render() {
        return (
            <div>
                <NavBar />
                <QRCode value={this.state.linkToCart} />
                <Footer />
            </div>
        );
    }
}

export default CheckOut;