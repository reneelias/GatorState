/*
It will show this route when there's no specified path.
*/

import React from 'react';

import Navbar from '../components/Navbar';
import {Greeting,MessageBackground,Title,Message} from '../components/styled';

export const Home = () => {
    return (
        <div>
      
const Title = styled.h1`
    padding: 10px;
    font-size: 60px;
    text-align: center;
    color: white;
    font-family: Coustard;
    text-decoration: underline;
`
const Message = styled.h2`
    padding: 10px;
    font-size: 48px;
    text-align: center;
    color: white;
    font-family: Coustard;
    
`
const Disclaimer = styled.h5`
    margin: auto;
    text-align:center;
`

export const Home = () => {
    return (
        <div> 
        <Disclaimer>SFSU Software Engineering Project CSC 648-848, Spring 2019.  For Demonstration Only</Disclaimer>
        <Navbar />
        <Greeting>
            <MessageBackground>
                <Title>
                    Gator State
                </Title>
                <Message>
                    Find your home away from home.<br />
                    
                    
                </Message>
            </MessageBackground>
        </Greeting>
        </div>
    );
};