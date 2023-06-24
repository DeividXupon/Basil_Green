import React from "react";
import { SectionHome } from "./home";
import ShowLogo from "./ShowLogo";
import Links from "./Links";

const Home = () => {
    return(
        <SectionHome id = "home">
            <ShowLogo/>
            <Links/>
        </SectionHome>
    )
}

export default Home;