import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ListingModal extends Component{
    constructor(props, context){
        super(props, context);
        
        this.state = {
            lgShow: false, 
        }
    }
    render(){
        let lgClose = () => this.setState({lgShow: false});     
        return(
            <div>
            <Button onClick={() => this.setState({lgShow: true})}>View Listing Details</Button>
            <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                <h4 >Address: {this.props.todo.address}</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <img 
                            src={this.props.todo.imgurl}
                            className="img-responsive"
                            width="100%"
                            />
                            <h3>Price: {this.props.todo.price}</h3>
                            <h3>Bed: instert number of beds</h3>   
                            <h3>Bath: insert number of baths</h3>  
                            <h3>About: {this.props.todo.description}</h3>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button>Contact Seller</Button>
            </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
