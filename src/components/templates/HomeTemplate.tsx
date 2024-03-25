import { Banner } from "../organisms/banner/Index"
import { Benefits } from "../organisms/benefits/Index"
import { Section } from "../organisms/section/Index"

import iphoneFrontSide from "../../assets/iphoneFrontSide.jpg"
import iphoneRightSide from "../../assets/iphoneRightSide.jpg"
import iphoneWhite from "../../assets/iphoneWhite.jpg"

const mocks = [
    {
        paragraphContent: `Descubra a última geração de tecnologia móvel com o novo iPhone. 
        Equipado com recursos de ponta e uma interface intuitiva,
        o iPhone redefine a experiência do usuário e eleva os padrões de inovação na indústria de smartphones.`
    },

    {
        paragraphContent: `O iPhone oferece desempenho excepcional para atender às demandas do mundo moderno. 
        Desde multitarefa suave até jogos intensivos, 
        o poderoso hardware e o software otimizado garantem uma experiência fluida em todas as atividades.`
    },

    {
        paragraphContent: `Além de sua funcionalidade superior, o iPhone é uma declaração de estilo e sofisticação. 
        Com um design elegante e materiais premium, o iPhone não é apenas uma ferramenta tecnológica, 
        mas também uma expressão de estilo pessoal e status.`
    },
]
export const HomeTemplate = ()=>{
    return (
        <>
            <Banner/>
            <Benefits/>
            <Section sourceImg={iphoneFrontSide} titleContent="Inovação Contínua: Conheça o Novo iPhone" paragraphContent={mocks[0].paragraphContent}/>
            <Section reversed sourceImg={iphoneRightSide } titleContent="Desempenho Excepcional: Descubra as Novas Funcionalidades do iPhone" paragraphContent={mocks[1].paragraphContent}/>
            <Section sourceImg={iphoneWhite} titleContent="Estilo e Sofisticação: Explorando o Design do iPhone" paragraphContent={mocks[2].paragraphContent}/>
        </>
    )
}