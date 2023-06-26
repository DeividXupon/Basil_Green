import React from "react";
import { Mostruario } from "./itens";
import pratos from "./pratos.json"
import Item from "./item";

const Itens = () => {
    return(
        <Mostruario>
            {pratos.map(item => <Item item={item}/>)}
        </Mostruario>
    )
}

export default Itens;