import React from "react";
import style from "./Cards.module.scss"
import {CardBeer} from "./cardBeer/CardBeer";

export const Cards = () => {
    return (
        <div className={style.wrapper}>
            <CardBeer/>
            <CardBeer/>
            <CardBeer/>

        </div>
    );
};
