import * as S from "./Styles"
import { Title } from "../../atoms/title/Index"
import { Paragraph } from "../../atoms/paragraph/Index"
import { ReactNode } from "react"

interface CardProps{
    children: ReactNode;
    titleContent: string;
    paragraphContent: string
}

export const Card = ({children, titleContent, paragraphContent}: CardProps) =>{
    return (
        <S.Card>
            {children}
            <Title color="#000" fontSize="1rem">{titleContent}</Title>
            <Paragraph color="#000" fontSize="0.8rem">{paragraphContent}</Paragraph>

        </S.Card>
    )
}

 