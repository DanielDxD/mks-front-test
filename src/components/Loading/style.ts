import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    height: 285px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Skeleton = styled.div`
    background-image: linear-gradient(-90deg, #e7edf1 0%, #f8f8f8 50%, #e7edf1 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }

    &.img {
        width: 90px;
        height: 120px;
        margin-top: 20px;
        border-radius: 5px;
    }
    &.title {
        width: 95%;
        height: 10px;
        margin-top:20px;
    }
    &.text {
        height: 8px;
        width: 75%;
        margin-top:5px;
    }
`;
