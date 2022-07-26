import React, {useEffect} from "react";
import style from "./Cards.module.scss"
import {CardBeer} from "./cardBeer/CardBeer";
import {Pagination} from "../paginate/Pagination";
import {SkeletonCardBeer} from "../skeletons/SkeletonCardBeer";
import {store, useAppDispatch, useAppSelector} from "../../redux/store";
import {getCardTC, setCurrentPageAC} from "../../redux/reducers/cardsReducer";


export const Cards = () => {
    const dispatch = useAppDispatch()
    const beers = useAppSelector(store => store.cardsReducer.beers)
    const isLoading = useAppSelector(store => store.cardsReducer.isLoading)
    const currentPage = useAppSelector(store => store.cardsReducer.currentPage)
    const searchValue = useAppSelector(store=>store.cardsReducer.searchValue)


    useEffect(() => {
        dispatch(getCardTC(currentPage, 4, searchValue))
    }, [currentPage, searchValue])

    const onChangePage = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    const elementBeer = beers.map((i) => {
        return <CardBeer key={i.id} name={i.name}
                         description={i.description} image_url={i.image_url}
                         itemId={i.id}/>
    })

    const skeletons = [...new Array(4)].map((_, i) => <SkeletonCardBeer
        key={i}/>)

    return (
        <div className={style.wrapper}>
            <div className={style.container__items}>
                {isLoading ? elementBeer : skeletons}
            </div>
            <div className={style.container__paginate}>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
};

export type ItemsType = Array<ItemType>

export type ItemType = {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string
    abv: number
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
        mash_temp: Array<{
            temp: {
                value: number
                unit: string
            }
            duration: number
        }>


        fermentation: {
            temp: {
                value: number
                unit: string
            }
        }
        twist: null
    }
    ingredients: {
        malt: Array<{
            name: string
            amount: {
                value: number
                unit: string
            }
        }>
        hops: Array<{
            name: string
            amount: {
                value: number
                unit: string
            }
            add: string
            attribute: string
        }>
        yeast: string
    }
    food_pairing: Array<string>
    brewers_tips: string
    contributed_by: string
}

/*useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=4${searchName}`)
            .then(res => {
                // setItems(res.data)
                dispatch(getItemsAC(res.data))
                dispatch(setLoadingStatusAC(true))
            })
    }, [currentPage])*/