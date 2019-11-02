import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBInput, MDBBtn } from 'mdbreact';

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
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

        if(value <= 0) {
            this.setState({
                [name]: 0
            })
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.foodName}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.desc}
                            <hr></hr>
                            <MDBInput 
                               label="Quantity"
                               icon="hashtag"
                               group
                               type="number"
                               validate
                               error="wrong"
                               success="right"
                               name="value"
                               required
                               onChange={this.handleChange}
                            />
                            <MDBBtn color="green darken-4">Add to Cart</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default CardItem;