import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Col, Container, Row } from "reactstrap";
import { IProduct, getProducts } from "../../services/api";
import ProductCard from "../ProductCard";
import { AppContainer } from "./styles";
import Cart from "../Cart";
import Footer from "../Footer";
import swal from "sweetalert";
import Loading from "../Loading";

export default function App(): JSX.Element {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(res => setProducts(res.products))
            .catch(async () => {
                await swal("Atenção!", "Ocorreu um erro. Não foi possível obter os produtos.", "warning");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Header />
            <AppContainer>
                <Container>
                    <Row>
                        {loading ? Array(4).fill("").map((_, i) => (
                            <Col md={3} key={i}>
                                <Loading />
                            </Col>
                        )) : products.map(item => (
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
