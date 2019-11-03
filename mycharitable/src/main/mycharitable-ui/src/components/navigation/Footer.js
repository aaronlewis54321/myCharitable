import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <div>
                <MDBFooter color=" indigo lighten-2" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center">
                        <MDBRow>
                            <MDBCol md="12">
                                <h6>Thanks for using MyCharitable!</h6>
                                <p>Glad We Can Help!</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="#!"> myCharitable </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default Footer;