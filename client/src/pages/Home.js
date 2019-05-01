/*
It will show this route when there's no specified path.
*/

import React from 'react';

import NavbarComp from '../components/NavbarComp';
import Search from '../components/Search';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

export const Home = () => {
  return (
    <Container fluid>
      <NavbarComp />
      <Jumbotron>
        <Search />
      </Jumbotron>
    </Container>
  );
};
