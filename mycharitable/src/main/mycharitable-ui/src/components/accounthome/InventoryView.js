import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBAnimation, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import CardItem from '../../assests/CardItem';

class InventoryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsToDisplay: [],
            loading: '',
            itemList: []
        }
    }

    async componentDidMount() {
        this.setState({ loading: <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>});
        const getItemsResponse = await fetch(`/api/itemlist/getInventory`);
        const getItemsJson = await getItemsResponse.json();
        this.setState({ loading: '' });
        this.setState({ itemList: getItemsJson.items });
        console.log(getItemsJson);
        console.log(this.state.itemList.length);
        var cards = []
        for(var i = 0; i < this.state.itemList.length; i++) {
           cards.push(<MDBCol md="3" xs="12" style={{marginTop: '5%'}}><CardItem foodName={this.state.itemList[i].name} desc={this.state.itemList[i].description}></CardItem></MDBCol>);
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
                        <MDBIcon icon="shopping-cart" size="2x" className="white-text"></MDBIcon>
                    </div>
                </MDBAnimation>
            </div>
        );
    }
}

export default InventoryView;