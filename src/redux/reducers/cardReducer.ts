import {ThunkType} from "../store";
import {beerApi} from "../../api/api";
import {ItemType} from "./cardsReducer";

type InitialStateType = {
    item: Array<ItemType> | []
}
const initialState = {
    item: [],
}

export const cardReducer = (state: InitialStateType = initialState, action: CardActionType): InitialStateType => {
    switch (action.type) {
        case "card/GET_ITEM": {
            return {...state, item: action.item}
        }
        default:
            return state
    }
}

export type CardActionType =
    ReturnType<typeof getItemAC>

export const getItemAC = (item: Array<ItemType>) => ({
    type: "card/GET_ITEM",
    item
} as const)

export const getItemTC = (id: number): ThunkType => async dispatch => {
    try {
        const res = await beerApi.getItemBeer(id)
        dispatch(getItemAC(res.data))
    } catch (e) {
        console.log("Error")
    }
}