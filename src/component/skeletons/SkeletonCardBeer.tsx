import React from "react";
import style from "./SkeletonCardBeer.module.scss"

export const SkeletonCardBeer = () => {
    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <div className={style.imgBeer}></div>
            </div>
            <div className={style.container__description}>
                <div className={style.title}></div>
                <div className={style.description}></div>
            </div>
        </div>
    );
};

