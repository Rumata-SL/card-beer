import {CardActionType, cardReducer} from "./reducers/cardReducer";
import {CardsActionType, cardsReducer} from "./reducers/cardsReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    cardsReducer: cardsReducer,
    cardReducer: cardReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppRootActionsType = CardsActionType | CardActionType

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>

export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


