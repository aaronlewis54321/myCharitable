import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBAnimation, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBNavLink } from 'mdbreact';
import CardItem from '../../assests/CardItem';
import Notifications, { notify } from 'react-notify-toast';

class InventoryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsToDisplay: [],
            loading: '',
            itemList: [],
            modal: false,
            cartTable: [],
            cartArray: [],
            checkoutLink: ''
        }
        this.toggle = this.toggle.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    clearCart() {
        var cartTableTemp = [];
        this.setState({ cartTable: cartTableTemp });
    }

    addToCart(name, description) {
        console.log("Name of new Item: " + name);
        this.state.cartTable.push(<tr><td>{this.state.cartTable.length + 1}</td><td>{name}</td><td>{description}</td></tr>);
        this.state.cartArray.push(name + "\n");
        console.log(this.state.cartArray);
        let myColor = { background: '#25D366', text: "#FFFFFF" };
        this.setState({
            checkoutLink: "/qrCode/" + this.props.email + "/true/" + this.state.cartArray
        });
        console.log(this.state.checkoutLink);
        notify.show("Added " +  name + " to your cart!", "custom", 2000, myColor);
    }

    async componentDidMount() {
        this.setState({ loading: <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div> });
        const getItemsResponse = await fetch(`/api/itemlist/getInventory`);
        const getItemsJson = await getItemsResponse.json();
        this.setState({ loading: '' });
        this.setState({ itemList: getItemsJson.items });
        console.log(getItemsJson);
        console.log(this.state.itemList.length);
        var cards = []
        for (var i = 0; i < this.state.itemList.length; i++) {
            cards.push(<MDBCol md="3" xs="12" style={{ marginTop: '5%' }}><CardItem name={this.state.itemList[i].name} desc={this.state.itemList[i].description} addToCart={this.addToCart}></CardItem></MDBCol>);
        }
        this.setState({
            cardsToDisplay: cards
        });
    }

    render() {
        return (
            <div>
                <Notifications />
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBContainer style={{ marginBottom: '10%' }}>
                        <MDBAnimation type="fadeIn" duration="1s" delay="0.5s">
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol>
                                    <h3>Welcome, {this.props.firstName}!</h3>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol>
                                    <h4>Current Items Around You: {this.state.loading}</h4>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" duration="1s" delay="1s">
                            <MDBRow>
                                {this.state.cardsToDisplay}
                            </MDBRow>

                        </MDBAnimation>
                    </MDBContainer>
                    <div className="bottomright shoppingcarticon">
                        <MDBBtn rounded outline color="black" onClick={this.toggle}><MDBIcon icon="shopping-cart" size="1x"></MDBIcon></MDBBtn>
                    </div>
                </MDBAnimation>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}><span style={{ color: 'black' }} className="shoppingcart">Shopping Cart</span></MDBModalHeader>
                    <MDBModalBody>
                        <span style={{ color: 'black' }}>
                            <MDBTable>
                                <MDBTableHead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {this.state.cartTable}
                                </MDBTableBody>
                            </MDBTable>
                            <br></br>
                            <br></br>
                            <MDBRow>
                                <MDBBtn color="danger" onClick={this.clearCart} style={{ marginLeft: '3%' }}>Clear Cart</MDBBtn>
                            </MDBRow>
                        </span>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBNavLink to={this.state.checkoutLink}>Checkout!</MDBNavLink>
                        <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default InventoryView;