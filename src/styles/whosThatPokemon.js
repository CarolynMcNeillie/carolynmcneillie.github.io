import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  position: relative;
`;

export const ScoreBord = styled.div`
  display: block;
  position: absolute;
  right: 0;
  font-family: "Bungee", cursive;
  font-size: 20px;
`;

export const Pokemon = styled.img`
  display: block;
  width: 400px;
  margin: 0 auto;
`;

export const AnswerBox = styled.input`
  display: block;
  padding: 10px 30px;
  border: 1px solid #33333;
  margin: 0 auto;
  text-align: center;

  ${(props) => {
    switch (props.valid) {
      case false:
        return css`
          border: 5px solid red;
        `;
    }
  }}
`;

export const Button = styled.button`
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
    background: #555555;
  }

  &:disabled {
    background: #777777;
  }
`;
