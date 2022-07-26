import axios from "axios";
import {ItemType} from "../redux/reducers/cardsReducer";


export const instance = axios.create({
    baseURL:"https://api.punkapi.com/v2/"
})

export const beerApi = {
    getBeers(page:number, per_page:number, searchValue:string ){
        return instance.get<Array<ItemType>>(`beers?page=${page}&per_page=${per_page}${searchValue ? `&beer_name=${searchValue}` : ""}`)
    },
    getItemBeer(id:number){
        return instance.get<Array<ItemType>>(`beers/${id}`)
    }
}
