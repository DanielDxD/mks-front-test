import { createGlobalStyle } from "styled-components";
import { colors } from "./theme/colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html {
        height: 100%;
        background-color: ${colors.white};
    }
`;

export default GlobalStyle;
