import styled from "styled-components";

export interface TitleStyledProps{
    fontSize?: string;
    color?: string
}

export const Title = styled.h1<TitleStyledProps>`
    font-size: ${({fontSize})=> fontSize ?? "16px"} ;
    color: ${({color})=> color ?? "Black"};
    font-family: "Roboto", sans-serif;
    font-weight: 800;
`