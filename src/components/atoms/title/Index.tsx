import { ReactNode } from "react";
import * as S from "./Styles";

interface TitleFunctionProps{
    children: ReactNode;

}
export const Title = ({children, color, fontSize}: TitleFunctionProps & S.TitleStyledProps)=>{
    return <S.Title color={color} fontSize={fontSize}> {children} </S.Title>
}