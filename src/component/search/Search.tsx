import style from "./Search.module.scss"
import React from "react";

export const Search = () => {
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   type="text"
                   placeholder={"search beer"}/>
        </div>
    );
};
