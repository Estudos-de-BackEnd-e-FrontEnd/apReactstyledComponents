import styled from "styled-components";
import bannerImg from "../../../assets/banner-bg.jpg"

export const Banner = styled.div`
    background-image: url(${bannerImg});
    width: 100%;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    object-fit: cover;
    background-color: #000000;

    display: flex;
    justify-content: center;
    align-items: center;
`