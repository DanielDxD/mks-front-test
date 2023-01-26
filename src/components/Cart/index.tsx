import React from "react";
import { ButtonPurchase, CartHeader, CartHeaderTitle, CloseButton, Container, Price, ProductCard, ProductText, Quantity, TotalContent } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, toggleCart, useCart } from "../../redux/sliceCart";
import { IProduct } from "../../services/api";

type Props = {
    isOpen?: boolean
}

export default function Cart(): JSX.Element {

    const cart = useSelector(useCart);
    const dispatch = useDispatch();

    function closeCart() {
        dispatch(toggleCart());
    }

    function addProductQuantity(product: IProduct) {
        dispatch(addProduct(product));
    }
    function removeProductQuantity(id: number) {
        dispatch(removeProduct({ id }));
    }
    function removeAll(id: number) {
        const productQuantities = cart.items.filter(x => x.id == id).length;
        dispatch(removeProduct({ id, quantity: productQuantities }));
    }

    return (
        <Container className={cart.isOpen ? "active" : ""}>
            <div className="sub-container">
                <CartHeader>
                    <CartHeaderTitle>Carrinho<br />de compras</CartHeaderTitle>
                    <CloseButton onClick={closeCart}>x</CloseButton>
                </CartHeader>
                <div className="overflow">
                    {cart.items.filter(function (a) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                    }, Object.create(null)).map(item => (
                        <ProductCard key={item.id}>
                            <img src={item.photo} height="57px" alt={item.name} />
                            <ProductText>{item.name}</ProductText>
                            <Quantity>
                                <button onClick={() => removeProductQuantity(item.id)} className="left">-</button>
                                <div>{cart.items.filter(x => x.id === item.id).length}</div>
                                <button onClick={() => addProductQuantity(item)} className="right">+</button>
                            </Quantity>
                            <Price>R${Number(item.price).toLocaleString("pt-br")}</Price>
                            <button onClick={() => removeAll(item.id)} className="close">x</button>
                        </ProductCard>
                    ))}
                </div>
                <TotalContent>
                    <div style={{ width: "100%" }} className="d-flex align-items-center justify-content-between">
                        <h2>Total:</h2>
                        <h2>R${cart.items.reduce((a, b) => a + Number(b.price), 0).toLocaleString("pt-br")}</h2>
                    </div>
                    <ButtonPurchase>Finalizar compra</ButtonPurchase>
                </TotalContent>
            </div>
        </Container>
    );
}
