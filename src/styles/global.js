import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    font-size: 100%;
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
