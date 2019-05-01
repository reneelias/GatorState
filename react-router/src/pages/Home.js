/*
It will show this route when there's no specified path.
*/

import React from 'react';


import NavbarResultPage from '../frontend/NavbarResultPage';
import Search from '../frontend/Search';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => {


    return (
        <div>
            <NavbarResultPage />
        <Container fluid>
            <Jumbotron>
                <Search />
            </ Jumbotron>
        </Container>
        </div>
    );
};

export default Home;