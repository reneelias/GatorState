/*
It will show this route when there's no specified path.
*/

import React from 'react';


import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Home = () => {

    return (
        <div>
            <Navbar />
        <Container fluid>
            <Jumbotron>
                <Search />
            </ Jumbotron>
        </Container>
        </div>
    );
};