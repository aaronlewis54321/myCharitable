import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBAnimation, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import CardItem from '../../assests/CardItem';

class InventoryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsToDisplay: [],
            loading: '',
            itemList: [],
            modal: false,
            cartTable: []
        }
        this.toggle = this.toggle.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    addToCart(name, description, quantity) {
        var cartTableTemp = [];
        cartTableTemp.push(<tr><td>1</td><td>{name}</td><td>{description}</td><td>{quantity}</td></tr>);
        this.setState({cartTable: cartTableTemp});
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
            cards.push(<MDBCol md="3" xs="12" style={{ marginTop: '5%' }}><CardItem foodName={this.state.itemList[i].name} desc={this.state.itemList[i].description} addToCart={this.addToCart}></CardItem></MDBCol>);
        }
        this.setState({
            cardsToDisplay: cards
        });
    }

    render() {
        return (
            <div>
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
                        <MDBIcon icon="shopping-cart" className="white-text" onClick={this.toggle}></MDBIcon>
                    </div>
                </MDBAnimation>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}><span style={{ color: 'black' }}>Shopping Cart</span></MDBModalHeader>
                    <MDBModalBody>
                        <span style={{ color: 'black' }}>
                            <MDBTable>
                                <MDBTableHead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {this.state.cartTable}
                                </MDBTableBody>
                            </MDBTable>
                            <br></br>
                            <br></br>
                            Wish you the best!
                        </span>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="success">Checkout!</MDBBtn>
                        <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default InventoryView;