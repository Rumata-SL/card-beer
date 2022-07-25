import axios from "axios";
import {ItemsType} from "../component/cards/Cards";

export const instance = axios.create({
    baseURL:"https://api.punkapi.com/v2/"

})

export const beerApi = {
    getBeer(page:number, per_page:number){
        return instance.get<ItemsType>(`beer?page=${page}&per_page=${per_page}`)
    }
}

