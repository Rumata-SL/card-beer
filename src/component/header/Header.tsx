import React from "react";
import style from "./Header.module.scss"
import {Search} from "../search/Search";
import home from "../../assets/image/home-page.png"
import {NavLink} from "react-router-dom";

type IsActive = {
    isActive: boolean
}

export const Header = () => {
    const setActive = ({isActive}: IsActive) => isActive ? style.active : style.link

    return (
        <div className={style.container}>
            <div className={style.container__img}>
                {/*<img className={style.logo__img} src={home} alt="beer"/>*/}
                <NavLink className={setActive} to={"/cards/"}><img className={style.logo__img} src={home} alt="beer"/></NavLink>
            </div>
            <Search/>
        </div>
    );
};