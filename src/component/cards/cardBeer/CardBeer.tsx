import React from "react";
import style from "./CardBeer.module.scss"
import imgBeer from "../../../assets/image/pivo.png"


export const CardBeer = () => {
    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <img className={style.imgBeer} src={imgBeer} alt="imgBeer"/>
            </div>
            <div className={style.title}>TITLE</div>
            <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio earum eos iste libero neque provident sit. Ab distinctio, ipsum!</div>
            <div>tagline  : ok</div>
            <div>abv  : 0.4</div>
            <div>food_pairing  : lager</div>
        </div>
    );
};


