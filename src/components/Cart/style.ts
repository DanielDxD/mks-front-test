import { colors } from "../../styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 0 !important;
    position: absolute;
    top: 0;
    right: 0;
    overflow-x: hidden !important;
    background-color: ${colors.primary};
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    transition: .3s ease-in;

    .sub-container {
        position: relative;
        height: 100vh;
        overflow: auto;

        .overflow {
            height: calc(100vh - 390px);
            overflow: auto;
            /* ===== Scrollbar CSS ===== */
            /* Firefox */
            & {
                scrollbar-width: none;
                scrollbar-color: #ffffff ${colors.primary};
            }

            /* Chrome, Edge, and Safari */
            &::-webkit-scrollbar {
                width: 5px;
            }

            &::-webkit-scrollbar-track {
                background: ${colors.primary};
            }

            &::-webkit-scrollbar-thumb {
                background-color: #ffffff;
                border-radius: 10px;
                border: 3px solid #ffffff;
            }
        }
    }
    &.active {
        width: 486px !important;
        z-index: 5000;
    }
`;
export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 36px 46px;
    margin-bottom: 70px;
`;
export const CartHeaderTitle = styled.h3`
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: ${colors.white};
`;
export const CloseButton = styled.button`
    height: 38px;
    width: 38px;
    background-color: #000;
    color: ${colors.white};
    border-radius: 50%;
    border: none;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const ProductCard = styled.div`
    background-color: #fff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 46px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 10px;
    position: relative;

    .close {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #000;
        color: #fff;
        position: absolute;
        top: -5px;
        z-index: 1000;
        right: -5px;
    }
`;
export const ProductText = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    width: 110px;
`;
export const Quantity = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    color: ${colors.dark};
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    
    div {
        margin: 0;
        padding: 0 5px;
    }

    button {
        border: none;
        background-color: #fff;
        padding: 0 5px;
        margin: 0;

        &.left {
            border-right: 1px solid #BFBFBF;
        }
        &.right {
            border-left: 1px solid #BFBFBF;
        }
    }
`;


export const Price = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000;
`;
export const TotalContent = styled.div`
    position: absolute;
    bottom: 0;
    
    width: 100%;

    h2 {
        color: ${colors.white};
        margin: 36px 46px;
    }
`;
export const ButtonPurchase = styled.button`
    background-color: #000;
    width: 100%;
    height: 97px;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #FFFFFF;
    border: none;
`;
