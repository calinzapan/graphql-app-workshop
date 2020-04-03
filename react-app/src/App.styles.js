
import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
  :root {
    --primaryGreen: #00DADA;
    --grey: #666666;
    --lightGrey: #9D9D9D;
    --primaryBackground: #ffffff;
    --secondaryBlack: #1b1c1f;
    --tertiaryBlack: #26282b;
    --pantone: #C800A1;
    --white: #FFFFFF;
    --secondaryWhite: #F2F2F2;
    --opaqueWhite: #40FFFFFF;
    --orange: #FF8F1C;
    --secondaryOrange: #FFb800;
    --crimson: #f4633a;
    --darkGrey: #323335;
    --errorRed: #ff0000;
  }
  body {
    margin: 0;
    background-color: var(--primaryBackground);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
`;
export default Theme;