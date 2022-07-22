import React from "react";
import style from "./Search.module.scss"

export const Search = () => {
    return (
        <div className={style.wrapper}>
            <input className={style.input} type="text" placeholder={"search" +
                " beer"}/>
        </div>
    );

};
