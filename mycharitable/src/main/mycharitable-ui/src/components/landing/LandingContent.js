import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from '../../assests/Card';


class LandingContent extends Component {
    render() {
        return (
            <div>
                <MDBContainer>
                    <h3 style={{ marginTop: '5%', textAlign: 'center' }} id="whatwedo">What We Do</h3>
                    <MDBRow style={{ marginTop: '5%', marginBottom: '5%' }}>
                        <MDBCol md="4">
                            <img src="/adult-barista.jpg" className="img-fluid maincontentimage" alt="" />
                        </MDBCol>
                        <MDBCol md="8" style={{ marginTop: '5%', marginBottom: '5%' }}>
                            <h4>Purpose</h4>
                            <hr></hr>
                            <p>myCharitable is a service that allows restaurants to donate meals to in need
                                individuals, verified by EBT, in real time. Restaurants often over estimate how much
                                food they need to make in a given time period, and that food goes to waste. Other
                                times, they want to donate but it seems like a big task to coordinate with a charity. </p>
                        </MDBCol>
                    </MDBRow>
                    <hr></hr>
                    <MDBRow style={{ marginTop: '5%', marginBottom: '5%' }}>
                        <MDBCol md="8" style={{ marginTop: '5%', marginBottom: '5%' }}>
                            <h4>Process</h4>
                            <hr></hr>
                            <p>myCharitable allows the restaurant to alert the customer that there is an available 
                                meal and allows the customer to claim that meal and pick it up using their 
                                myCharitable card. The business is then able to track the donations they have given
                                and can write them off on their taxes at the end of each year. </p>
                        </MDBCol>
                        <MDBCol md="4" xs="12">
                            <img src="/man-on-phone.jpg" className="img-fluid maincontentimage" alt="" />
                        </MDBCol>
                    </MDBRow>
                    <hr></hr>
                    <MDBRow style={{ marginTop: '5%', marginBottom: '5%' }}>
                        <MDBCol md="4">
                            <img src="/parents-with-kid.jpg" className="img-fluid maincontentimage" alt="" />
                        </MDBCol>
                        <MDBCol md="8" style={{ marginTop: '5%', marginBottom: '5%' }}>
                            <h4>People</h4>
                            <hr></hr>
                            <p>myCharitable fills a need- currently, there is no incentive for restaurants to accept 
                                EBT, and it varies by state. myCharitable benefits in need individuals by providing 
                                them with meals, benefits the companies by giving them tax incentives, and 
                                benefits the environment by reducing food waste. myCharitable has an immense 
                                potential to improve the communities it serves. </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer style={{ marginBottom: '10%' }}>
                    <h3 style={{ marginTop: '5%', textAlign: 'center' }} id="whatwedo">Who We Are</h3>
                    <MDBRow>
                        <MDBCol md="3" style={{ marginTop: '5%' }}>
                            <Card imagePic="/Naymish.jpg" name="Naymish"/>
                        </MDBCol>
                        <MDBCol md="3" style={{ marginTop: '5%' }}>
                            <Card imagePic="/Aaron.jpg" name="Aaron" />
                        </MDBCol>
                        <MDBCol md="3" style={{ marginTop: '5%' }}>
                            <Card imagePic="/DJ.PNG" name="DJ" />
                        </MDBCol>
                        <MDBCol md="3" style={{ marginTop: '5%' }}>
                            <Card imagePic="/Adam.jpeg" name="Adam" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default LandingContent;