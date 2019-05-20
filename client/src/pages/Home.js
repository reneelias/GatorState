/*
It will show this route when there's no specified path.
*/

import React from 'react';

import Navbar from '../components/Navbar';
import {Greeting,MessageBackground,Title,Message,Disclaimer} from '../components/styled';



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