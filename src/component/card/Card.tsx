import style from "./Card.module.scss"
import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {TitleCard} from "./titleCard/TitleCard";
import {Preloader} from "../preloader/Preloader";
import imgBeer from "../../assets/image/beer.png";
import {getItemTC} from "../../redux/reducers/cardReducer";
import {store, useAppDispatch, useAppSelector} from "../../redux/store";

export const Card = () => {
    const dispatch = useAppDispatch()
    const item = useAppSelector(store => store.cardReducer.item[0])
    const {id} = useParams()
    const itemId = Number(id)

    useEffect(() => {
        dispatch(getItemTC(itemId))
    }, [id])

    if (!item) return <Preloader/>
    let picture = `${!item.image_url ? imgBeer : item.image_url}`
    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <img className={style.img__beer} src={picture} alt={item.name}/>
            </div>
            <div className={style.container__property}>
                <h2 className={style.title}> {item.name}</h2>
                <TitleCard title={"Tagline"}
                           value={item.tagline}/>
                <hr className={style.hr__line}/>
                <br/>
                <TitleCard title={"Description"}
                           value={item.description}/>
                <br/>
                <TitleCard title={"Alcohol by volume"}
                           value={`${item.abv + ""}`}/>
                <br/>
                <TitleCard title={"Food pairing"}
                           value={`${item.food_pairing.join(". ")}.`}/>
            </div>
        </div>
    );
};