import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    justify-content: space-between;
    background-color: #080808;
    display: flex;
    align-items: center;
    padding: 0 40px;

`

export const Ul = styled.ul`
    display: flex;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: .9rem;
  
    span{
        margin: 5px;
    }

    
  
`

export const Col = styled.ul`
    display: flex;
    flex-direction: column;

    p{
        margin-top: 15px;
    }

    svg{
        color: white;
        font-size: 24px;

    }

    &:nth-child(2){
        flex-direction: row;
        svg{
            margin: 5px;
        }
    }

`