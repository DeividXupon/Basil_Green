import React from "react";
import { BoxShow, LogoGrande, Prato } from "./showLogo";
import logo from "assets/basilgeenLogo.svg";


import prato from "assets/prato.png";


const ShowLogo = () => {
    return(
        <section>
            <BoxShow>
                <LogoGrande src={logo} alt="Logo basil green"></LogoGrande>
                <Prato src={prato} alt="vista superior de cafe da manha caseiro saldavel" ></Prato>
            </BoxShow>
        </section>
    )
}

export default ShowLogo;