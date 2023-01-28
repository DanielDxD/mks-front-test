import React from "react";
import { render } from "@testing-library/react";
import ProductCard from ".";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockProduct = {
    brand: "Apple",
    createdAt: new Date().toLocaleDateString(),
    description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    id: 1,
    name: "Iphone 11 128 GB",
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
    price: "5000.00",
    updatedAt: new Date().toLocaleDateString()
};

describe("Product Cart component", () => {
    it("Should render a product item", () => {
        const { getByText, getByAltText } = render(<Provider store={store}><ProductCard product={mockProduct} /></Provider>);

        expect(getByAltText("Iphone 11 128 GB")).toBeInTheDocument();
        expect(getByText("Iphone 11 128 GB")).toBeInTheDocument();
        expect(getByText("R$5.000")).toBeInTheDocument();
        expect(getByText("Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.")).toBeInTheDocument();
        expect(getByText("COMPRAR")).toBeInTheDocument();
    });
});
