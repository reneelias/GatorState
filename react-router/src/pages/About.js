import React from 'react';
import ListingCard from '../frontend/ListingCard'
import Listing from '../frontend/Listing'
import { connect } from 'react-redux';

const About = ({props}) => {
    
    return (
        
        <div>
            <h2>About</h2>
            <Listing/>
        </div>
    );
};

export default About;