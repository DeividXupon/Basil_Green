import { BoxFooter } from "./footer";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footre = () => {
    return(
        <BoxFooter>
            <a className="link" href="https://github.com/DeividXupon" target="_blank" rel="noopener noreferrer">
                <AiFillGithub color="#793a00" size="100%"/>
            </a>
            <p className="assinatura">Feito por: Deivid Silva</p>
            <a className="link" href="https://www.linkedin.com/in/deividsouzasilva/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin color="#003c64" size="100%"/>
            </a>
        </BoxFooter>
    )
}

export default Footre;