import React from "react";
import { Brand, CartButton, Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, useCart } from "../../redux/sliceCart";

export default function Header(): JSX.Element {

    const cart = useSelector(useCart);
    const dispatch = useDispatch();

    function openCart() {
        dispatch(toggleCart());
    }

    return (
        <Container id="header">
            <Brand>
                MKS <span>Sistemas</span>
            </Brand>
            <CartButton onClick={openCart}>
                <img src="/cart-icon.svg" alt="Cart icon" width="19px" height="18px" /> <span>{cart.items.length}</span>
            </CartButton>
        </Container>
    );
}
