import { BoxBuscador, InputPricipal } from "./buscador";
import {CgSearch} from "react-icons/cg"

interface Iprops {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({busca, setBusca}: Iprops) => {

    return(
        <BoxBuscador>
            <CgSearch size={20} color="#000"/>
            <InputPricipal placeholder="Pesquisar" value={busca} onChange={(event) => {setBusca(event.target.value); console.log(busca) } }/>
        </BoxBuscador>
    )
}

export default Buscador;