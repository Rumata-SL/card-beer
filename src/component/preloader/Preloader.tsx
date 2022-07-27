import React from "react";
import style from "./Preloader.module.scss"
import loader from "../../assets/image/preload.gif"

export const Preloader = () => {
    return (
        <div className={style.container}>
            <img className={style.preloader} src={loader} alt="preloader"/>
        </div>
    );
};
