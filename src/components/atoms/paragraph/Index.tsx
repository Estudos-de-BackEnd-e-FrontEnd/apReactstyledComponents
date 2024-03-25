import { ReactNode } from "react";
import * as S from "./Styles";

interface TitleFunctionProps{
    children: ReactNode;

}
export const Paragraph = ({children, color, fontSize}: TitleFunctionProps & S.TitleStyledProps)=>{
    return <S.Paragraph color={color} fontSize={fontSize}> {children} </S.Paragraph>
}