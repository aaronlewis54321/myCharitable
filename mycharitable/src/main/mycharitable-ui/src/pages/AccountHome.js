import React, { Component } from 'react';
import Login from '../components/login/Login';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';

class AccountHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formOrsuccess: <Login callback={this.callBackFromAccountHome}/>
        }
        this.callBackFromAccountHome = this.callBackFromAccountHome.bind(this);
    }

    callBackFromAccountHome = (dataFromChild) => {
        this.setState({
            formOrsuccess: dataFromChild
        });
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.formOrsuccess}
                <Footer />
            </div>
        );
    }
}

export default AccountHome;