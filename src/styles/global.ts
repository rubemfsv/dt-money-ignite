import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    //group1
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    //group2
    --blue-light: #6933ff;
    //group3
    --text-title: #363f5f;
    --text-body: #969cb3;
    //group4
    --shape: #ffffff;
  }

  * {
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)

  html { 
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
