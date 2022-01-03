import styled, {createGlobalStyle} from "styled-components"
import {Link} from "react-router-dom"

export const Global = createGlobalStyle`
    body {
        min-height: 100vh;
        background-image: url('../images/misc/not_found_bg.jpeg'); 
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Container = styled.div`
`;

export const Inner = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    margin: 120px auto;
    max-width: 600px;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 56px;
    text-shadow: 0px 0px 75px black;
`;

export const Text = styled.p`
    text-align: center;
    font-size: 23px;
    border-left: ${props=>props.borderleft};
    padding: 0 1em;
    text-shadow: 0px 0px 13px black;
    & span{
        font-weight: bold;
    }
`;

export const Button = styled(Link)`
    font-size: 16px;  
    color: black;
    background: white;
    font-weight: bold;
    text-decoration: none;
    padding: .7em 1.6em;
    border-radius: 4px;

    &:hover{
        opacity: .7;
    }
`;  