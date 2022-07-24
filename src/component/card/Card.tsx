import React, {useEffect, useState} from "react";
import style from "./Card.module.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import {ItemType} from "../cards/Cards";

export const Card = () => {
    const {id} = useParams()
    const [item, setItem] = useState<ItemType | null>(null)

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res=>setItem(res.data[0]))
    },[id])

    if (!item) return <div>Loading...</div>

    return (
        <div className={style.container}>
            <div>
                <div>{item.tagline}</div>
            </div>
        </div>
    );
};
