import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font: 400 1rem "Mulish", sans-serif;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Mulish", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
