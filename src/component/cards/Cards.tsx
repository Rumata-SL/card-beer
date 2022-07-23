import React, {useEffect, useState} from "react";
import style from "./Cards.module.scss"
import {CardBeer} from "./cardBeer/CardBeer";
import axios from "axios";


export const Cards = () => {

    const [items, setItems] = useState<ItemsType | []>([])
    const [page, setPage]= useState(2)
    const [currentPage, setCurrentPage] = useState(9)

    useEffect(()=>{
        axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${currentPage}`)
            .then(res=>setItems(res.data))
    },[])

    const elementBeer = items.map((i)=>{
        return <CardBeer key={i.id} name={i.name} description={i.description} image_url={i.image_url}/>
    })

    return (
        <div className={style.wrapper}>

            {elementBeer}
        </div>
    );
};

type ItemsType = Array<ItemType>

type ItemType = {
    id: number
    name: string
    tagline:string
    first_brewed: string
    description: string
    image_url:string
    abv:number
    ibu: number
    target_fg: number
    target_og: number
    ebc: number
    srm: number
    ph: number
    attenuation_level: number
    volume: {
        value: number
        unit: string
    }
    boil_volume: {
        value: number
        unit: string
    }
    method: {
        mash_temp: [
            {
                temp: {
                    value: number
                    unit: string
                }
                duration: number
            }
        ]
        fermentation: {
            temp: {
                value: number
                unit: string
            }
        }
        twist: null
    }
    ingredients: {
        malt: [
            {
                name: string
                amount: {
                    value: number
                    unit: string
                }
            }
        ]
        hops: [
            {
                name: string
                amount: {
                    value: number
                    unit: string
                }
                add: string
                attribute: string
            }
        ]
        yeast: string
    }
    food_pairing: [
        string
    ]
    brewers_tips: string
    contributed_by: string
}