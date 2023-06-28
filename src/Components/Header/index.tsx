import React from "react";
import { Menu, NavegacaoHeader} from "./header";
import logo from "assets/basilgeenLogo.svg"


const Header = () => {
    return(
        <Menu>
            <img src={logo} alt="Logo Basil Green"/>
            <NavegacaoHeader>
                <a href="#home">HOME</a>
                <a href="#cardapio">CARDAPIO</a>
                <a href="#sobre">SOBRE</a>
                <a href="#a">CHEF</a>
                <a href="#a">CONTATO</a>
            </NavegacaoHeader>
        </Menu>
    )
}

export default Header;