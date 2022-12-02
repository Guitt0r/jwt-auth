import {Action, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>

export type BaseActions<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunk<A extends Action> = ThunkAction<void, RootState, unknown, A>
