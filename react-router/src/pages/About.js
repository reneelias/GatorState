import React from 'react';
<<<<<<< HEAD
import ListingCard from '../frontend/ListingCard'
import Listing from '../frontend/Listing'
=======
import Listing from '../frontend/Listing';
import NavbarResultPage from '../frontend/NavbarResultPage'
>>>>>>> e86fd37b4365e1cacc1512ede292b5e4c6be593d
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



const About = ({props}) => {
    
    return (
        
        <div>
<<<<<<< HEAD
            <h2>About</h2>
            <Listing/>
=======
            <NavbarResultPage />
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col >
                        <Listing />
                    </Col>
                </Row>
            </Container>
>>>>>>> e86fd37b4365e1cacc1512ede292b5e4c6be593d
        </div>
    );
};

export default About;