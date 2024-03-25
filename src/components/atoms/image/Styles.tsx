import styled from "styled-components";

export interface ImageStyledProps{
    imagewidth?: string;
    imageheight?: string
}

export const Image = styled.img<ImageStyledProps>`
    width: 100%;
    max-width: ${({imagewidth})=> imagewidth ?? "auto" };
    height: ${({imageheight})=>imageheight ?? "auto" };
`