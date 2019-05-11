/*
It will show this route when there's no specified path.
*/

import React from 'react';

import Navbar from '../components/Navbar';
import {Greeting,MessageBackground,Title,Message} from '../components/styled';


export const Home = () => {
    return (
        <div>
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