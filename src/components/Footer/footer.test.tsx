import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("<Footer />", () => {
    it("Should render the copyright text on footer", () => {
        render(<Footer />);

        expect(screen.getByText(/MKS Sistemas © Todos os direitos reservados/i)).toBeInTheDocument();
    });
});
