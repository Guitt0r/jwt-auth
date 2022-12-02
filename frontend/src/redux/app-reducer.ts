import {BaseActions, BaseThunk} from "./store";
import {me} from "./auth-reducer";

type InitialState = {
    isInitialize: boolean
}

const initialState: InitialState = {
    isInitialize: false
}

const appReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case "app/SET_IS_INITIALIZE_SUCCESS":
            return {
                ...state,
                isInitialize: action.isInitialize
            }
        default:
            return state
    }
}
const actions = {
    setInitializeSuccess: (isInitialize: boolean) => ({type: 'app/SET_IS_INITIALIZE_SUCCESS', isInitialize} as const)
}

export const setInitialize = (): Thunk => async (dispatch) => {
    await dispatch(me())
    dispatch(actions.setInitializeSuccess(true))
}

type Actions = BaseActions<typeof actions>
type Thunk = BaseThunk<Actions>

export default appReducer