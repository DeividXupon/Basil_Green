import { useState } from "react";
import Buscador from "./Buscador";
import Filtro from "./Filtro";
import Opcao from "./Opcao";
import { BoxCardapio, Titulo, Op, SectionFiltros } from "./cardapio";

import opcoes from "./opcoes.json";

const Cardapio = () => {

    const [busca, setBusca] = useState("")

    const [filtro, setFiltro] = useState<number | null>(null)

    const [opcao, setOpcao] = useState("Ordenar Por:");

    return (
        <BoxCardapio id="cardapio">
            <SectionFiltros>
                <div className="buscador">
                    <Titulo>Cardapio</Titulo>
                    <Buscador busca={busca} setBusca={setBusca} />
                    <Filtro filtro={filtro} setFiltro={setFiltro} />
                </div>
                <div className="option">
                    <Opcao opcao={opcao}>
                        {opcoes.map(op =>
                            <Op key={op.value} onClick={() => setOpcao(op.value)}>{op.nome}</Op>
                        )}
                    </Opcao>
                </div>
            </SectionFiltros>
            
        </BoxCardapio>
    )
}

export default Cardapio;