import React, { useState } from "react";
import { BoxOpcoes, ButOption, Press, End } from "./opcao";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

interface Iporps {
    children: any,
    opcao: string
}

const Opcao = ({children, opcao}: Iporps) => {

    const [ativo, setAtivo] = useState(false); 

    return (
        <>
            <ButOption $ativo={ativo} onBlur={() => setAtivo(false)}>
                <Press $ordenado={opcao !== "Ordenar Por:"} onClick={() => setAtivo(!ativo)}>
                    <p>{opcao}</p>
                    {ativo ? <AiFillCaretUp size={20} color="black"/> : <AiFillCaretDown size={20} color="black"/>}
                </Press>
                <BoxOpcoes $ativo={ativo}>
                    {children}
                </BoxOpcoes>
                <End></End>
            </ButOption>
        </>
    )
}

export default Opcao;