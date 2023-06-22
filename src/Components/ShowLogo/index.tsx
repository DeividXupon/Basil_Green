import React from "react";
import { BoxLinks, BoxShow, LogoGrande, Prato } from "./styled";
import logo from "assets/basilgeenLogo.svg";

import prato from "assets/prato.png";


const ShowLogo = () => {
    return(
        <section>
            <BoxShow>
                <LogoGrande src={logo} alt="Logo basil green"></LogoGrande>
                <Prato src={prato} alt="vista superior de cafe da manha caseiro saldavel" ></Prato>
            </BoxShow>
            <BoxLinks>
                
            </BoxLinks>
        </section>
    )
}

export default ShowLogo;