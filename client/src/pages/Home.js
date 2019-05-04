/*
It will show this route when there's no specified path.
*/

import React from 'react';
import NavbarResultPage from '../components/NavbarResultPage';
import styled from 'styled-components';
import lib from 'images/lib.jpg';

const Greeting = styled.div`
    padding: 4em ;
    background-image: url(${lib});
    background-position: 50%;
    width: 100%;
    height: 582px;
    background-repeat: no-repeat;
    background-color: grey;
`
const MessageBackground = styled.div`
    
    background:black;
    margin: auto;
    opacity: .9;
    width: 45%;
    border: 5px solid;
    border-color:white;
    position:relative;
    
`

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

export const Home = () => {
    return (
        <div>
        <NavbarResultPage />
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