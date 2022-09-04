import styled, { css } from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
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

  ${(props) => {
    switch (props.valid) {
      case false:
        return css`
          border: 5px solid red;
        `;
    }
  }}
`;
