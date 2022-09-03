import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
    }
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 40px;
`

export const Heading = styled.h1`
    color: red;
`

export const NavLink = styled.li`
    display: inline;
`

export const NavButton = styled.button`
    margin: 4px;
    background-color: blue;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    border: 0;
    transition: 0.2s ease;
    
    &:hover, &:focus {
        background: red;
    }
`