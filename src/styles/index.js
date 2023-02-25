import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
    }

    h1, h2, h3 {
        font-family: 'Bungee', cursive; 
    }

    .capitalize {
        text-transform: capitalize;
    }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 40px;
  border-bottom: 2px solid #333333;
`;

export const Heading = styled.h1`
  user-select: none;
`;

export const NavLink = styled.li`
  display: inline;
`;

export const NavButton = styled.button`
  margin: 4px;
  background-color: #333333;
  color: white;
  border-radius: 4px;
  padding: 10px 20px;
  border: 0;
  transition: 0.2s ease;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover,
  &:focus {
    background: red;
  }
`;
