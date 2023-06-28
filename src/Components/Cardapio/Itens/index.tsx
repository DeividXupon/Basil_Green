import { useState, useEffect } from "react";
import { Mostruario } from "./itens";
import pratos from "./pratos.json"
import Item from "./item";

interface Iprops {
    filtro: number | null,
    opcao: string,
    busca: string
}

const Itens = ({ filtro, opcao, busca }: Iprops) => {

    const [listaPratos, setListaPratos] = useState(pratos)

    function testaBuscador(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true
    }

    function ordenar(lista: typeof pratos) {
        switch (opcao) {
            case "Porção":
                return lista.sort((a, b) => a.size > b.size ? 1 : -1);
            case "Qtd. pessoas":
                return lista.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case "Preço":
                return lista.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return lista
        }
    }

    useEffect(() => {

        const novaLista = pratos.filter(item => testaBuscador(item.title) && testaFiltro(item.category.id));
        setListaPratos(ordenar(novaLista));

    }, [filtro, busca, opcao])

    return (
        <Mostruario>
            {listaPratos.map(item => <Item key={item.id} item={item}></Item>)}
        </Mostruario>
    )
}

export default Itens;