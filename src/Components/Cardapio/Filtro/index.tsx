import React from "react";
import { BoxFiltro, Opcao } from "./filtro";
import filtros from "./filtro.json";

interface Iopcao {
    label: string,
    id: number
}

interface Iprops {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>

}

export const Filtro = ({ filtro, setFiltro }: Iprops) => {

    function setFiltroDeOpcao({ label, id }: Iopcao) {
        filtro === id ? setFiltro(null) : setFiltro(id);
    }
    
    return (
        <BoxFiltro>
            {filtros.map((opcao) => <Opcao $selecionado={filtro === opcao.id} key={opcao.id} onClick={() => setFiltroDeOpcao(opcao)}>{opcao.label}</Opcao>)}
        </BoxFiltro>
    )
}

export default Filtro;