import React from 'react';
import Listing from '../frontend/Listing';
import NavbarResultPage from '../frontend/NavbarResultPage'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



const About = () => {
    
    return (
        
        <div>
            <NavbarResultPage />
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col >
                        <Listing />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;