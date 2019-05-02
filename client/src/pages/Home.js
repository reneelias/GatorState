/*
It will show this route when there's no specified path.
*/

import React from 'react';


import NavbarResultPage from '../components/NavbarResultPage';
import Search from '../components/Search';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Home = () => {


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