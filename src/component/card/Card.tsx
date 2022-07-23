import React, {FC} from "react";
import style from "./Card.module.scss"
import {ItemType} from "../cards/Cards";
type CardPropsType = {
    item?:ItemType
}
export const Card:FC<CardPropsType> = () => {
    return (
        <div className={style.container}>
            <div>
                <h1>zdsvsbsbSDFb</h1>
            </div>
        </div>
    );
};
