import { corContraste } from "Components/UI/variaveis";
import { BoxCarrossel, CarrosselMain, Foto, FotoBut } from "./carrossel";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import photos from "./photos.json";
import { useState } from "react";

const Carrossel = () => {

    const [href, setHref] = useState(0);

    return(
        <BoxCarrossel>
            <div className="boxImgs">
                <a onClick={() => setHref(prev => prev !== 0 ? prev - 1 : 6)}
                    href={`#${href}`}>
                    <button className="butCarro1">
                        <IoIosArrowDropleft size={"4.5vw"} color={corContraste} />
                    </button>
                </a>
                <CarrosselMain>
                    {photos.map(foto => 
                        <Foto 
                            key={foto.id} 
                            id={`${foto.id}`} 
                            $img={foto.photo}
                        />)}
                </CarrosselMain>
                <a onClick={() => setHref(prev => prev !== 6 ? prev + 1 : 0)}
                    href={`#${href}`}>
                    <button className="butCarro2">
                        <IoIosArrowDropright size={"4.5vw"} color={corContraste}/>
                    </button>
                </a>
            </div>
            <div className="listaEscolha">
                {photos.map(foto => <FotoBut $visualizado={foto.id === href} href={`#${href}`} onClick={() => setHref(foto.id)}  $img={foto.photo}/>)}
            </div>
        </BoxCarrossel>
    )
}

export default Carrossel;