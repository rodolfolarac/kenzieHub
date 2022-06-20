import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Inter', sans-serif;
        font-size: 100%;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
        position: relative;
    }

    body {
        background-color: #000;
    }

    img {
        width: 100%;
    }

    button{
        cursor: pointer;
    }

    ul, ol, li {
        list-style: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --sucess: #3FE864;
        --negative: #E83F5B;
    }



`;

export const GlobalContainer = styled.div`
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
  align-items: center;
`;

export const GlobalButton = styled.button`
  max-width: 324px;
  height: 48px;

  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) => props.BgColor || "#FF577F"};
  padding: 10px;
  border: none;
  border-radius: 4px;
`;
