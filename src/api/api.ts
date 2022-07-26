import axios from "axios";
import {ItemsType} from "../component/cards/Cards";

export const instance = axios.create({
    baseURL:"https://api.punkapi.com/v2/"

})

export const beerApi = {
    getBeer(page:number, per_page:number, searchValue:string ){
        return instance.get<ItemsType>(`beers?page=${page}&per_page=${per_page}${searchValue ? `&beer_name=${searchValue}` : ""}`)
    },
    searchBeer(){
        return instance.get<ItemsType>(`beers?`)
    }
}

// searchValue ? beer_name=${searchValue} : ""

// https://api.punkapi.com/v2/beers?page=1&per_page=4&beer_name=pink