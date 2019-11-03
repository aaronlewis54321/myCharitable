import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdbreact';

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
                pathToPic: '/burger.jpg'
            })
        }
        if(this.props.name === "Chicken Sandwich") {
            this.setState({
                pathToPic: '/chickensandwich.jpeg'
            })
        }
        if(this.props.name === "Drink") {
            this.setState({
                pathToPic: '/drink.jpeg'
            })
        }
        if(this.props.name === "Salad") {
            this.setState({
                pathToPic: '/salad.jpg'
            })
        }
        if(this.props.name === "Pasta") {
            this.setState({
                pathToPic: '/burger.jpg'
            })
        }
        if(this.props.name === "Chicken Strips") {
            this.setState({
                pathToPic: '/chickentenders.jpg'
            })
        }
        if(this.props.name === "Fries") {
            this.setState({
                pathToPic: '/fries.jpeg'
            })
        }
        if(this.props.name === "Soup") {
            this.setState({
                pathToPic: '/soup.jpeg'
            })
        }
        if(this.props.name === "Ramen") {
            this.setState({
                pathToPic: '/ramen.jpg'
            })
        }
        if(this.props.name === "Pizza") {
            this.setState({
                pathToPic: '/pizza.jpg'
            })
        }
        if(this.props.name === "Hummus plate") {
            this.setState({
                pathToPic: '/hummus.jpg'
            })
        }
        if(this.props.name === "Smoothie") {
            this.setState({
                pathToPic: '/smoothie.jpg'
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
                    <MDBCardImage className="img-fluid" src={this.state.pathToPic} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.name}</MDBCardTitle>
                        <MDBCardText>
                            <hr></hr>
                            {this.props.desc}
                            <MDBBtn color="green darken-4" onClick={() => this.props.addToCart(this.props.name, this.props.desc)} style={{float: 'right'}}>Add to Cart</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default CardItem;