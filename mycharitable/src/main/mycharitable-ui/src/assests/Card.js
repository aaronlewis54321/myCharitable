import React, { Component } from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage} from 'mdbreact';

class Card extends Component {
    render() {
        return (
            <div>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardImage className="img-fluid" src={this.props.imagePic} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.name}</MDBCardTitle>
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