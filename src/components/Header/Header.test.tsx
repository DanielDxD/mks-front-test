import { render } from "@testing-library/react";
import React from "react";
import Header from ".";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Header", () => {
    it("Should render brand name", () => {
        const { getByText } = render(<Provider store={store}><Header /></Provider>);

        expect(getByText("MKS")).toBeInTheDocument();
        expect(getByText("Sistemas")).toBeInTheDocument();
    });
    it("Should render cart button", () => {
        const { getByText, getByAltText } = render(<Provider store={store}><Header /></Provider>);

        expect(getByText("0")).toBeInTheDocument();
        expect(getByAltText("Cart icon")).toBeInTheDocument();
    });
});
