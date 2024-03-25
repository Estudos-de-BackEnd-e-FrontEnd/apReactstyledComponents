import * as S from "./Styles"

interface ImageProps{
    sourceImg: string
}

export const Image = ({sourceImg, imageheight, imagewidth}: ImageProps &  S.ImageStyledProps ) => {
    return <S.Image src={sourceImg} imageheight={imageheight} imagewidth={imagewidth}/>
}