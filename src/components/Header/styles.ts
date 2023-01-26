import { colors } from "../../styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0 65px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

export const Brand = styled.h1`
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;

    span {
        font-weight: 300;
        font-size: 20px;
        line-height: 19px;
    }
`;

export const CartButton = styled.button`
    height: 45px;
    width: 90px;
    border-radius: 8px;
    background-color: #ffffff;
    border: none;
    color: ${colors.dark};

    span {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        margin-left: 13px;
    }
`;
