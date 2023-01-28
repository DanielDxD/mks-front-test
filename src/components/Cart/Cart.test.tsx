import { render } from "@testing-library/react";
import React from "react";
import Cart from ".";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Cart", () => {
    it("Should render cart", () => {
        const { getByText } = render(<Provider store={store}><Cart /></Provider>);

        expect(getByText("Finalizar compra")).toBeInTheDocument();
    });
});
