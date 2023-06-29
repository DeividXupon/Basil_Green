import { BoxChef } from "./chef";
import chef from "assets/fotoDoChef.png"

const Chef = () => {
    return(
        <BoxChef id="chef">
            <img className="fotoChef" alt="Chef: sidynei" src={chef}/>
            <p className="palavChef">
                "A comida saudável transcende a mera nutrição física, adentrando o domínio do bem-estar integral. Ela é capaz de nutrir o corpo, a mente e a alma, criando uma sinergia entre o prazer de saborear e a vitalidade proporcionada pelos alimentos."
                <br></br><br></br>
                -Chef Sidney
            </p>
        </BoxChef>
    )
}

export default Chef;