import React, { Component } from 'react';
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAnimation } from 'mdbreact';

class HeroSection extends Component {
    render() {
        return (
            <div className="hero-section">
                {/* <MDBAnimation type="fadeIn" duration="1s">
                    <MDBJumbotron fluid>
                        <MDBAnimation type="fadeIn" duration="1s" delay="1s">
                            <MDBContainer>
                                <HeroNav modalToggle={this.toggle} />
                                <MDBRow className="hero-text-positioning" style={{ marginTop: '10%', textAlign: 'center' }}>
                                    <MDBCol xs={0} md={5}>

                                    </MDBCol>

                                    <MDBCol xs={12} md={7}>
                                        <h1>Secret Santa Generator</h1>
                                        <hr></hr>
                                        <h3>Create your own Secret Santa group!</h3>
                                        <p>If your group of family and friends is trying to setup the perfect way to run your secret santa group, you've come to the right place!</p>
                                        <MDBBtn rounded outline color="white" style={{ marginTop: '2%' }}><Link to="/#getstarted" className="getstartedlink">Get Started</Link><MDBIcon icon="gift" style={{ marginLeft: '5px' }} /> </MDBBtn>
                                    </MDBCol>

                                </MDBRow>
                            </MDBContainer>
                        </MDBAnimation>
                    </MDBJumbotron>
                </MDBAnimation> */}
            </div>
        );
    }
}

export default HeroSection;