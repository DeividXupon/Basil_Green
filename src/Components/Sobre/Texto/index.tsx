import { useState } from "react";
import { Paragra, TextoSobreBox } from "./texto";

const TextoSobre = () => {

    const [isAberto, setIsAberto] = useState(false)

    return (
        <TextoSobreBox>
            <Paragra $aberto={isAberto}>
                Somos uma empresa apaixonada por alimentação saudável e comprometida em oferecer marmitas congeladas de altíssima qualidade. Aqui, acreditamos que uma dieta equilibrada pode ser saborosa, prática e repleta de opções saudáveis.
                <br></br>
                <br></br>
                Nossas marmitas são cuidadosamente preparadas, pensando no seu bem-estar e na sua rotina agitada. Se você é uma pessoa fit e saudável, encontrará em nossos pratos a combinação perfeita de ingredientes nutritivos e deliciosos. Valorizamos a sua saúde e acreditamos que a alimentação pode ser uma aliada na busca pelo seu estilo de vida ideal.
                <br></br>
                <br></br>
                Além disso, também atendemos às necessidades de pessoas veganas, proporcionando refeições livres de produtos de origem animal, sem abrir mão do sabor e da qualidade. Sabemos o quanto é importante para você encontrar opções adequadas ao seu estilo de vida, e estamos aqui para oferecer exatamente isso.
                <br></br>
                <br></br>
                Na Basil Green, não poupamos esforços na seleção dos melhores ingredientes, garantindo que cada marmita seja uma experiência gastronômica inesquecível. Nossos chefs são verdadeiros mestres culinários, capazes de transformar simples ingredientes em pratos saudáveis e cheios de sabor.
                <br></br>
                <br></br>
                Com a praticidade das marmitas congeladas, você terá sempre uma refeição saudável ao seu alcance, mesmo nos dias mais corridos. Nosso objetivo é facilitar sua vida, proporcionando uma alimentação balanceada e saborosa de maneira conveniente.
                <br></br>
                <br></br>
                Então, junte-se a nós na busca por uma vida mais saudável e cheia de sabor. Descubra as marmitas congeladas Basil Green e sinta a diferença que uma alimentação equilibrada pode fazer. Estamos aqui para cuidar de você, alimentando seu corpo e sua mente de maneira amigável e prática.
                <br></br>
                <br></br>
                <i>Bem-vindo à família Basil Green!</i>
            </Paragra>
            <button onClick={() => setIsAberto(prev => !prev)} className="but">
                Mostrar mais
            </button>
        </TextoSobreBox>
    )
}

export default TextoSobre;