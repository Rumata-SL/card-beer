import debounce from "lodash.debounce";
import style from "./Search.module.scss";
import React, {ChangeEvent, useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    changeSearchValueAC,
    getCardTC
} from "../../redux/reducers/cardsReducer";

export const Search = () => {
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector(state => state.cardsReducer.searchValue)
    const currentPage = useAppSelector(store => store.cardsReducer.currentPage)
    const [value, setValue] = useState("")

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(changeSearchValueAC(str))
        }, 700), []
    )
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
    const onClickHandler = () => {
        dispatch(getCardTC(currentPage, 4, searchValue))
        dispatch(changeSearchValueAC(""))
        setValue("")
    }
    return (
        <div className={style.wrapper}>
            <input
                className={style.input}
                value={value}
                onChange={onChangeHandler}
                onClick={onClickHandler}
                type="text"
                placeholder={"search beer"}
            />
        </div>
    );
};
