import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBInput, MDBBtn } from 'mdbreact';

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            pathToPic: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if(this.props.name === "Burger") {
            this.setState({
                pathToPic: '/images/burger.jpg'
            })
        }
        if(this.props.name === "Chicken Sandwich") {
            this.setState({
                pathToPic: '/images/chickensandwich.jpeg'
            })
        }
        if(this.props.name === "Drink") {
            this.setState({
                pathToPic: '/images/drink.jpeg'
            })
        }
        if(this.props.name === "Salad") {
            this.setState({
                pathToPic: '/images/salad.jpg'
            })
        }
        if(this.props.name === "Pasta") {
            this.setState({
                pathToPic: '/images/burger.jpg'
            })
        }
        if(this.props.name === "Chicken Strips") {
            this.setState({
                pathToPic: '/images/chickentenders.jpg'
            })
        }
        if(this.props.name === "Fries") {
            this.setState({
                pathToPic: '/images/fries.jpeg'
            })
        }
        if(this.props.name === "Soup") {
            this.setState({
                pathToPic: '/images/soup.jpeg'
            })
        }
        if(this.props.name === "Ramen") {
            this.setState({
                pathToPic: '/images/ramen.jpg'
            })
        }
        if(this.props.name === "Pizza") {
            this.setState({
                pathToPic: '/images/pizza.jpg'
            })
        }
        if(this.props.name === "Hummus plate") {
            this.setState({
                pathToPic: '/images/hummus.jpg'
            })
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

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <MDBCard style={{ width: "100%" }}>
                    <MDBCardImage className="img-fluid" src="/images/" waves />
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
                                name="quantity"
                                required
                                onChange={this.handleChange}
                            />
                            <MDBBtn color="green darken-4" onClick={() => this.props.addToCart(this.props.foodName, this.props.desc, this.state.quantity)}>Add to Cart</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default CardItem;