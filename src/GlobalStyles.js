import { createGlobalStyle } from "styled-components";
import NewFont from "./Fonts/bpg_nino_mtavruli_normal.ttf";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};

body{  
    height:100vh;
    width:100%;
    
}
  @font-face {
    font-family: 'Geo';
    src: url(${NewFont}) format('truetype');
  }
`;

export default GlobalStyles;
