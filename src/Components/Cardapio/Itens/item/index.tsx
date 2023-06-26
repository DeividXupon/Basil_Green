import React from "react";
import { ItemGrid } from "./item";

interface Iprops {
    item: {
        title: string;
        description: string;
        photo: string;
        size: number;
        serving: number;
        price: number;
        id: number;
        category: {
            id: number;
            label: string;
        };
    }
}

const Item = ({item}: Iprops) => {
    return(
        <ItemGrid $img={item.photo}>
            <div className="imagem"></div>
            <div className="paragrafo">
                <p className="titulo">{item.title}</p>
                <p className="descri">{item.description}</p>
            </div>
            <div className="valor">
                {item.price}.00 R$
            </div>
            <div className="tags">
                <div className="tag">{item.category.label}</div>
                <div className="tag">{item.size}kg</div>
                <div className="tag">Serve {item.serving}</div>
            </div>
        </ItemGrid>
    )
}

export default Item;