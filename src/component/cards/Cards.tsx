import React, {useEffect} from "react";
import style from "./Cards.module.scss"
import {CardBeer} from "./cardBeer/CardBeer";
import {Pagination} from "../paginate/Pagination";
import {SkeletonCardBeer} from "../skeleton/SkeletonCardBeer";
import {store, useAppDispatch, useAppSelector} from "../../redux/store";
import {getCardTC, setCurrentPageAC} from "../../redux/reducers/cardsReducer";


export const Cards = () => {
    const dispatch = useAppDispatch()
    const beers = useAppSelector(store => store.cardsReducer.beers)
    const isLoading = useAppSelector(store => store.cardsReducer.isLoading)
    const currentPage = useAppSelector(store => store.cardsReducer.currentPage)
    const searchValue = useAppSelector(store => store.cardsReducer.searchValue)

    useEffect(() => {
        dispatch(getCardTC(currentPage, 4, searchValue))
    }, [currentPage])

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