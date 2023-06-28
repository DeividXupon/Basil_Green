import { Titulo } from "Components/UI";
import { BoxSobre } from "./sobre";
import TextoSobre from "./Texto";
import Carrossel from "./Carrossel";

const Sobre = () => {
    return(
        <BoxSobre id="sobre">
            <Titulo>Sobre</Titulo>
            <div className="conte">
                <TextoSobre/>
                <Carrossel/>
            </div>
        </BoxSobre>
    )
}

export default Sobre;