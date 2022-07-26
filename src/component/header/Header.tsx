import React from "react";
import {Search} from "../search/Search";
import style from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import home from "../../assets/image/home-page.png"

type IsActive = {
    isActive: boolean
}

export const Header = () => {
    const setActive = ({isActive}: IsActive) => isActive ? style.active : style.link

    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <NavLink className={setActive} to={"/cards/"}>
                    <img className={style.logo__img} src={home} alt="beer"/>
                </NavLink>
            </div>
            <Search/>
        </div>
    );
};
