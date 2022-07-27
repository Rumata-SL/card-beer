import {ThunkType} from "../store";
import {beerApi} from "../../api/api";

type InitialStateType = {
    isLoading: boolean
    currentPage: number
    searchValue: string
    pageCount: number
    beers: Array<ItemType>
}

const initialState: InitialStateType = {
    isLoading: false,
    currentPage: 1,
    searchValue: "",
    pageCount: 70,
    beers: [{
        id: 1,
        name: "Buzz",
        tagline: "A Real Bitter Experience.",
        first_brewed: "09/2007",
        description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        abv: 4.5,
        ibu: 60,
        target_fg: 1010,
        target_og: 1044,
        ebc: 20,
        srm: 10,
        ph: 4.4,
        attenuation_level: 75,
        volume: {value: 20, unit: "litres"},
        boil_volume: {value: 25, unit: "litres"},
        method: {
            mash_temp: [{
                temp: {value: 64, unit: "celsius"},
                duration: 75
            }],
            fermentation: {temp: {value: 19, unit: "celsius"}},
            twist: null
        },
        ingredients: {
            malt: [{
                name: "Maris Otter Extra Pale",
                amount: {value: 3.3, unit: "kilograms"}
            }, {
                name: "Caramalt",
                amount: {value: 0.2, unit: "kilograms"}
            }, {name: "Munich", amount: {value: 0.4, unit: "kilograms"}}],
            hops: [{
                name: "Fuggles",
                amount: {value: 25, unit: "grams"},
                add: "start",
                attribute: "bitter"
            }, {
                name: "First Gold",
                amount: {"value": 25, "unit": "grams"},
                add: "start",
                attribute: "bitter"
            }, {
                name: "Fuggles",
                amount: {value: 37.5, unit: "grams"},
                add: "middle",
                attribute: "flavour"
            }, {
                name: "First Gold",
                amount: {value: 37.5, unit: "grams"},
                add: "middle",
                attribute: "flavour"
            }, {
                name: "Cascade",
                amount: {"value": 37.5, "unit": "grams"},
                add: "end",
                attribute: "flavour"
            }],
            yeast: "Wyeast 1056 - American Ale™"
        },
        food_pairing: ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"],
        brewers_tips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        contributed_by: "Sam Mason <samjbmason>"
    }],
}

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionType): InitialStateType => {
    switch (action.type) {
        case "cards/GET_ITEMS": {
            return {...state, beers: action.beers}
        }
        case "cards/SET-IS_LOADING_STATUS": {
            return {...state, isLoading: action.isLoading}
        }
        case "cards/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "cards/CHANGE_SEARCH_VALUE": {
            return {...state, searchValue: action.value}
        }
        default:
            return state
    }
}

export type CardsActionType =
    ReturnType<typeof getItemsAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof changeSearchValueAC>


export const getItemsAC = (beers: Array<ItemType>) => ({
    type: "cards/GET_ITEMS",
    beers
} as const)

export const setLoadingStatusAC = (isLoading: boolean) => {
    return {
        type: "cards/SET-IS_LOADING_STATUS",
        isLoading
    } as const
}
export const setCurrentPageAC = (currentPage: number) => ({
    type: "cards/SET_CURRENT_PAGE",
    currentPage
} as const)

export const changeSearchValueAC = (value: string) => ({
    type: "cards/CHANGE_SEARCH_VALUE",
    value
} as const)

export const getCardTC = (page: number, per_page: number, beer_name: string): ThunkType => async dispatch => {
    try {
        dispatch(setLoadingStatusAC(false))
        const res = await beerApi.getBeers(page, per_page, beer_name)
        dispatch(getItemsAC(res.data))
        dispatch(setLoadingStatusAC(true))
    } catch (e) {
        console.log("Error")
    }
}

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
