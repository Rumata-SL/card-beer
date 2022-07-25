import style from "./Search.module.scss"
import React, {ChangeEvent, useState} from "react";

export const Search = () => {
    const [value, setValue] = useState("")

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClickHandler= ()=>{
        setValue("")
    }
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   value={value}
                   onChange={onChangeHandler}
                   onClick={onClickHandler}
                   type="text"
                   placeholder={"search beer"}/>
        </div>
    );
};


// const inputRef = useRef<HTMLInputElement | null>(null)as MutableRefObject<HTMLInputElement>