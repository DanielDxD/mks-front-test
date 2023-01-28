import { colors } from "src/styles/theme/colors";
import styled from "styled-components";

export const AppContainer = styled.div`
    padding-top: 116px;
    height: calc(100vh - 100px);
    overflow-y: auto;
    & {
        scrollbar-width: none;
        scrollbar-color: #111 #ffffff;
    }

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
        background-color:  #111;
        border-radius: 10px;
        border: 3px solid  #111;
    }

    .col-md-3 {
        margin-bottom: 30px;
    }
`;
