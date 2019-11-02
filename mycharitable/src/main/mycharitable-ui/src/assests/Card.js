import React, { Component } from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage} from 'mdbreact';

class Card extends Component {
    render() {
        return (
            <div>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default Card;