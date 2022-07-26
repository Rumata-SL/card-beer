import style from "./Search.module.scss"
import React, {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    changeSearchValueAC,
    getCardTC
} from "../../redux/reducers/cardsReducer";

export const Search = () => {
    const searchValue = useAppSelector(state => state.cardsReducer.searchValue)
    const currentPage = useAppSelector(store => store.cardsReducer.currentPage)
    const dispatch = useAppDispatch()

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValueAC(e.target.value))
    }

    const onClickHandler= ()=>{
        dispatch(getCardTC(currentPage, 4, searchValue))
        dispatch(changeSearchValueAC(""))
    }
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   value={searchValue}
                   onChange={onChangeHandler}
                   onClick={onClickHandler}
                   type="text"
                   placeholder={"search beer"}/>
        </div>
    );
};


// const inputRef = useRef<HTMLInputElement | null>(null)as MutableRefObject<HTMLInputElement>