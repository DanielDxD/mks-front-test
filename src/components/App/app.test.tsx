import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<App />", () => {
    it("Should render the heading", () => {
        render(<Provider store={store}><App /></Provider>);

        expect(screen.getByRole("heading", { name: /Hello, world/i }));

    });
});
