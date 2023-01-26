import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Col, Container, Row } from "reactstrap";
import { IProduct, getProducts } from "../../services/api";
import ProductCard from "../ProductCard";
import { AppContainer } from "./styles";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { useCart } from "../../redux/sliceCart";
import Footer from "../Footer";

export default function App(): JSX.Element {

    const [products, setProducts] = useState<IProduct[]>([]);
    const cart = useSelector(useCart);

    useEffect(() => {
        getProducts()
            .then(res => setProducts(res.products));
    }, []);

    return (
        <>
            <Header />
            <AppContainer>
                <Container>
                    <Row>
                        {products.map(item => (
                            <Col md={3} key={item.id}>
                                <ProductCard product={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </AppContainer>
            <Cart />
            <Footer />
        </>
    );
}
