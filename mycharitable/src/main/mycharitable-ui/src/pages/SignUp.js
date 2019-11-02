import React, { Component } from 'react';
import NavBar from '../components/navigation/NavBar';
import RegistrationForm from '../components/signup/RegistrationForm';
import Footer from '../components/navigation/Footer';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formOrsuccess: <RegistrationForm />
        }
        this.callBackFromSignUp = this.callBackFromSignUp.bind(this);
    }

    callBackFromSignUp = (dataFromChild) => {
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

export default SignUp;