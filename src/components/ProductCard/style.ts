import { colors } from "../../styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    height: 285px;
    .sub-container {
        padding-top: 18px;
        padding-left: 14px;
        padding-right: 14px;
    }
`;
export const Image = styled.div`
    text-align: center;
    margin-bottom: 14px;
    img {
        height: 138px;
    }
`;
export const Title = styled.h3`
    font-weight: 400;
    height: 38px;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.dark};
    padding-right: 10px;
    margin: 0;
`;

export const TitlePriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const PriceText = styled.div`
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: ${colors.dark};
    color: ${colors.white};
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center; 
    justify-content: center;
`;
export const Description = styled.p`
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
`;
export const PurchaseButton = styled.button`
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    border-radius: 0 0 8px 8px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
`;

