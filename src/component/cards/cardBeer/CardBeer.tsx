import React, {FC} from "react";
import style from "./CardBeer.module.scss"
import imgBeer from "../../../assets/image/pivo.png"
import {ItemType} from "../Cards";
// import beerImg from "../../../assets/image/beer.png"


type CardBeerPropsType = {
    name:string
    description:string
    image_url:string

    item:ItemType
}
export const CardBeer:FC<CardBeerPropsType> = ({name, description, image_url, ...restProps}) => {

    let descr = description.length> 140 ? `${description.slice(0 , 140)} ...`: description

    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <img className={style.imgBeer} src={`${!image_url? imgBeer :image_url  }`} alt="imgBeer"/>
            </div>
            <div className={style.title}>{name}</div>
            <div className={style.description}>{descr}</div>
        </div>
    );
};


/*
let desc:string = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
    " elit. Accusantium, ad alias aliquid atque aut beatae commodi consequatur consequuntur debitis dolore ducimus eveniet ex facere illo, impedit iure modi natus nihil nostrum porro quia quos recusandae rem sint ullam voluptates voluptatibus. Culpa cum delectus magni ratione tenetur. Beatae corporis ea eaque illo itaque maiores odio officia quidem, quo repellat reprehenderit sint voluptatem. Consequatur doloremque doloribus error esse eum fugiat, id itaque modi quam quia reiciendis repudiandae, sapiente vero, voluptate voluptatibus! Autem, beatae blanditiis cum est fuga incidunt minima minus neque placeat quo! Delectus dicta dolorum fuga harum placeat porro reiciendis ut!"*/
