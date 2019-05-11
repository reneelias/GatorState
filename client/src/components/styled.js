import styled from "styled-components";
import lib from 'images/lib.jpg';

//Listing
export const ResultText = styled.h1`
font-size: 1.5em;
text-align:center;
`
//Home
export const Greeting = styled.div`
    padding: 4em ;
    background-image: url(${lib});
    background-position: 50%;
    width: 100%;
    height: 582px;
    background-repeat: no-repeat;
    background-color: grey;
`
export const MessageBackground = styled.div`
    
    background:black;
    margin: auto;
    opacity: .9;
    width: 45%;
    border: 5px solid;
    border-color:white;
    position:relative;
    
`

export const Title = styled.h1`
    padding: 10px;
    font-size: 60px;
    text-align: center;
    color: white;
    font-family: Coustard;
    text-decoration: underline;
`
export const Message = styled.h2`
    padding: 10px;
    font-size: 48px;
    text-align: center;
    color: white;
    font-family: Coustard;
    
`
//Navbar
export const NavButton = styled.button`
display: inline-block;
font-size: 1em;
color: white;
background: rgb(0, 123, 255);
border: none;
border-radius: 3px;
font: sans serif;
text-align: center;
line-height: 36px;
`