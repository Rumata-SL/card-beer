import React, {FC} from "react";
import style from "../Card.module.scss";

type TitleCardType = {
    title:string
    value:string
}
export const TitleCard:FC<TitleCardType> = (props) => {
    const {title, value} = props
    return (
        <div>
            <span className={style.title__description}>{title} : </span><br/>{value}
        </div>
    )
}