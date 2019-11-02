import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBAnimation, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import CardItem from '../../assests/CardItem';

class InventoryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rowsOfItems: null,
            rowsOfItemsToDisplay: null,
            page: 0,
            loading: '',
            itemList: []
        }
        this.moveBackward = this.moveBackward.bind(this);
        this.moveForward = this.moveForward.bind(this);
    }

    async componentDidMount() {
        this.setState({ loading: <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>});
        const getItemsResponse = await fetch(`/api/itemlist/getInventory`);
        const getItemsJson = await getItemsResponse.json();
        this.setState({ loading: '' });
        this.setState({
            itemList: getItemsJson.items
        });
        console.log(getItemsJson);
        console.log(this.stateitemList[0]);
        console.log(this.state.itemList[0].name);
        // var rowArray = [];

        // for (var i = 0; i < 2; i++) {
        //     var rowArrayInner = [];
        //     for (var j = 0; j < 4; j++) {
        //         rowArrayInner.push(<MDBCol xs="12" md="3" style={{ marginTop: '5%' }}><CardItem /></MDBCol>);
        //     }
        //     rowArray.push(rowArrayInner);
        // }
        // console.log(rowArray);
        // this.setState({
        //     rowsOfItems: rowArray
        // });
        // console.log(this.state.rowsOfItems);
    }

    moveForward() {
        if (this.state.page === this.state.rowsOfItems.length) {
            this.setState({
                page: 0
            });
        } else {
            this.setState({
                page: this.state.page + 1
            });
        }

    }

    moveBackward() {
        if (this.state.page <= 1) {
            this.setState({
                page: this.state.rowsOfItems.length - 1
            })
        } else {
            this.setState({
                page: this.state.page - 1
            })
        }
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
                                    <h4>Current Items Around You: </h4>
                                </MDBCol>
                            </MDBRow>
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" duration="1s" delay="1s">
                            <MDBRow>
                                {this.state.loading}
                                {this.state.rowsOfItemsToDisplay}
                            </MDBRow>
                            <MDBRow style={{ marginTop: '5%' }}>
                                <MDBCol md="12" xs="12" className="align-content-center">
                                    <MDBBtn onClick={this.moveBackward}><MDBIcon icon="angle-left" size="2x"></MDBIcon></MDBBtn>
                                    <MDBBtn onClick={this.moveForward}><MDBIcon icon="angle-right" size="2x"></MDBIcon></MDBBtn>
                                </MDBCol>
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