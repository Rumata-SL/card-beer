import imgBeer from "../../../assets/image/beer.png"
import style from "./CardBeer.module.scss"
import {NavLink} from "react-router-dom";
import React, {FC} from "react";


type CardBeerPropsType = {
    description: string
    image_url: string
    itemId: number
    name: string
}
export const CardBeer: FC<CardBeerPropsType> = (props) => {
    const {name, description, image_url, itemId} = props

    let descriptionSlice = description.length > 140 ? `${description.slice(0, 140)} ...` : description
    let picture = `${!image_url ? imgBeer : image_url}`

    return (
        <NavLink to={`/card/${itemId}`} className={style.container}>
            <div className={style.container__img}>
                <img className={style.imgBeer}
                     src={picture}
                     alt="imgBeer"/>
            </div>
            <div className={style.container__description}>
                <div className={style.title}>{name}</div>
                <div className={style.description}>{descriptionSlice}</div>
            </div>
        </NavLink>
    );
};
