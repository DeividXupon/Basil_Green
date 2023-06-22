import React from "react";

import face from "assets/facebook.png";
import youtube from "assets/youtube.png";
import insta from "assets/instagram.png";

import { BoxLinks } from "./links"
import { IconeRedeSocial } from "Components/UI";

const Links = () => {
    return(
        <BoxLinks>
            <IconeRedeSocial src={face}/>
            <IconeRedeSocial src={insta}/>
            <IconeRedeSocial src={youtube}/>
        </BoxLinks>
    )
}

export default Links;