import * as S from "./Styles"
import { Card } from "../../molecules/card/Index"
import { GiBrickWall } from "react-icons/gi"
import { BsCpuFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";

const textMock = {
    resistenciaText: `O iPhone 12 é classificado como IP68, o que significa que é resistente a respingos, 
    água e poeira.`,

    processadorText: `O iPhone 12 é alimentado pelo avançado processador A14 Bionic da Apple, 
    oferecendo desempenho excepcional e eficiência energética.`,
    
    armazenamentoText:`O iPhone 12 está disponível em diferentes capacidades de armazenamento, 
    incluindo 64GB, 128GB e 256GB.`

}

export const Benefits = ()=>{
    return (
       <S.Benefits> 
            <Card titleContent="Resistência"  paragraphContent={textMock.resistenciaText}>
                <GiBrickWall size="96"/>
            </Card>
            <Card titleContent="Processador" paragraphContent={textMock.processadorText}>
                <BsCpuFill size="96"/>
            </Card>
            <Card titleContent="Armazenamento" paragraphContent={textMock.armazenamentoText}>
                <FaMemory size="96"/>
            </Card>
       </S.Benefits>
    )
}