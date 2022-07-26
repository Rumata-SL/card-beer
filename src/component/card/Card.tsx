import style from "./Card.module.scss"
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import imgBeer from "../../assets/image/beer.png";

import {store, useAppDispatch, useAppSelector} from "../../redux/store";
import {getItemTC} from "../../redux/reducers/cardReducer";


export const Card = () => {
    const item = useAppSelector(store => store.cardReducer.item[0])
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const itemId = Number(id)


    useEffect(() => {
        dispatch(getItemTC(itemId))

    }, [id])


    if (!item) return <div>Loading...</div>

    let picture = `${!item.image_url ? imgBeer : item.image_url}`

    return (
        <div className={style.container}>
            <div className={style.container__img}>
                <img className={style.img__beer} src={picture} alt={item.name}/>
            </div>
            <div className={style.container__property}>
                <h2 className={style.title}> {item.name}</h2>
                <div>
                    <span
                        className={style.title__description}>Tagline :</span><br/>{item.tagline}
                </div>
                <hr className={style.hr__line}/>
                <br/>
                <div>
                    <span
                        className={style.title__description}>Description :</span><br/>{item.description}
                </div>
                <br/>
                <div>
                    <span className={style.title__description}>Alcohol by volume : </span><br/>{item.abv}
                </div>
                <br/>
                <div>
                    <span
                        className={style.title__description}>Food pairing : </span><br/>{item.food_pairing}
                </div>
            </div>
        </div>
    );
};

// const [item, setItem] = useState<ItemType | null>(null)

/*axios.get(`https://api.punkapi.com/v2/beers/${id}`)
           .then(res => setItem(res.data[0]))*/