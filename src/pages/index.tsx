import GlobalStyle from "../styles/GlobalStyle";
import React from "react";
import App from "../components/App";
import { Provider } from "react-redux";
import store from "../redux/store";


export default function Home(): JSX.Element {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    );
}
