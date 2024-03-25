import { Image } from "../../atoms/image/Index"
import { Card } from "../../molecules/card/Index"
import * as S  from "./Styles"

interface SectionProps{
    titleContent: string;
    paragraphContent: string;
    sourceImg: string
}
export const Section = ({sourceImg, paragraphContent, titleContent, reversed}:SectionProps & S.SectionStyledProps) =>{
    return (
        <S.Section reversed={reversed}>
            <Card titleContent={titleContent} paragraphContent={paragraphContent}/>
            <Image sourceImg={sourceImg} imagewidth="500px" imageheight="500px"/>
        </S.Section>
    )
}