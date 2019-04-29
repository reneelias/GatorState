/*
It will show this route when there's no specified path.
*/

import React from 'react';


import NavbarComp from '../frontend/NavbarComp';
import Search from '../frontend/Search';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => {


    return (
        <Jumbotron>
            <Container>
                <div>
                    <NavbarComp></NavbarComp>
                </div>
                <div>
                    <Search ></Search>
                </div>
            </Container>
        </Jumbotron>
    );
};

export default Home;