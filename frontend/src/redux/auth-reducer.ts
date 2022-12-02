import {BaseActions, BaseThunk} from "./store";
import {User} from "../types/user.type";
import {authAPI, StatusCodes} from "../api/auth.api";
import {toast} from "react-toastify";

type InitialState = {
    user: User | null,
}

const initialState: InitialState = {
    user: null,
}

const authReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case "auth/SET_USER_SUCCESS":
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}
const actions = {
    setUserSuccess: (user: User | null) => ({type: 'auth/SET_USER_SUCCESS', user,} as const)
}

export const me = (): Thunk => async (dispatch) => {
    const user = localStorage.getItem('user')
    if (user)
        dispatch(actions.setUserSuccess(JSON.parse(user)))
}

export const signUp = (email: string, username: string, password: string): Thunk => async (dispatch) => {
    try {
        const info = await authAPI.signUp(email, username, password)
        if (info.statusCode === StatusCodes.Success) {
            dispatch(me())
            toast.success('Successful login')
        } else {
            toast.error(info.message)
        }
    } catch (e: any) {
        toast.error(e.response.data.message)
    }

}
export const login = (email: string, password: string): Thunk => async (dispatch) => {
    try {
        const info = await authAPI.login(email, password)
        if (info.statusCode === StatusCodes.Success) {
            dispatch(me())
            toast.success('Successful login')
        } else {
            toast.error(info.message)
        }
    } catch (e: any) {
        toast.error(e.response.data.message)

    }

}

export const logout = (): Thunk => async (dispatch) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(actions.setUserSuccess(null))
}

type Actions = BaseActions<typeof actions>
type Thunk = BaseThunk<Actions>

export default authReducer