import { Paragraph } from "../../atoms/paragraph/Index"
import * as S from "./Styles"
import { FaFacebook, FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";

export const Footer = ()=>{
    return (
        <S.Footer>
            <S.Col>
                <S.Ul>
                    <li>About<span>-</span></li>
                    <li>Contact<span>-</span></li>
                    <li>Termos of Use<span>-</span></li>
                    <li>Privacy Policy</li>
                </S.Ul>

                <Paragraph color="#afafaf" fontSize="0.8rem" >-&gt; Iphone-inspired page </Paragraph>
            </S.Col>
            
            <S.Col>
                <FaFacebook />
                <FaTwitterSquare/>
                <FaInstagramSquare/>
                
            </S.Col>

        </S.Footer>
    )
}