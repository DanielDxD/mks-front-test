import React from "react";
import { IProduct } from "../../services/api";
import { Container, Description, Image, PriceText, PurchaseButton, Title, TitlePriceContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, toggleCart, useCart } from "../../redux/sliceCart";

type Props = {
    product: IProduct;
}

export default function ProductCard({ product }: Props): JSX.Element {

    const cart = useSelector(useCart);
    const dispatch = useDispatch();

    function purchaseProduct() {
        if (!cart.isOpen) {
            dispatch(toggleCart());
        }

        dispatch(addProduct(product));
    }

    return (
        <Container>
            <div className="sub-container">
                <Image>
                    <img src={product.photo} alt={product.name} />
                </Image>
                <TitlePriceContainer>
                    <Title>{product.name}</Title>
                    <PriceText>R${Number(product.price).toLocaleString("pt-br")}</PriceText>
                </TitlePriceContainer>
                <Description>{product.description}</Description>
            </div>
            <PurchaseButton onClick={purchaseProduct}>
                <div><img src="/shopping-bag.svg" width="12px" alt="Shopping bag" /> COMPRAR</div>
            </PurchaseButton>
        </Container>
    );
}
