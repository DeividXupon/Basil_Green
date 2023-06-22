import React from "react";
import { Menu, NavegacaoHeader} from "./styled";
import logo from "assets/basilgeenLogo.svg"


const Cardapio = () => {
    return(
        <Menu>
            <img src={logo} alt="Logo Basil Green"/>
            <NavegacaoHeader>
                <a href="#a">HOME</a>
                <a href="#a">CARDAPIO</a>
                <a href="#a">SOBRE</a>
                <a href="#a">CHEF</a>
                <a href="#a">CONTATO</a>
            </NavegacaoHeader>
        </Menu>
    )
}

export default Cardapio;