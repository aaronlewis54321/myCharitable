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
                            Cool Kids Club Member
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default Card;