import styled from "styled-components";

export interface SectionStyledProps{
    reversed?: boolean
}
export const Section = styled.section<SectionStyledProps>`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: ${({reversed})=> reversed ? "row-reverse" : "row"};
    
    div{
        width: 100%;
        max-width: 500px;
        justify-content: center;
        padding: 48px;
        align-items: flex-start;

        h2{
            line-height: 1.4
        }
    }

    img{
        object-fit: cover;
         
    }
`