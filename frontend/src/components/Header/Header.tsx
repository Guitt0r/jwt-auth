import React from "react"
import {useAppDispatch, useAppSelector} from "../../hooks/react-redux.hooks";
import {selectUser} from "../../redux/user-selector";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";

const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
    return (
        <div className='p-5 shadow-lg bg-yellow-300 w-full flex items-center justify-between'>
            <h1 className='font-bold text-5xl'>Title</h1>
            <div>{user
                ? <div className='flex items-center gap-2'>
                    Hello, {user.username}
                    <button className='submit-btn' onClick={()=>dispatch(logout())}>Logout</button>
                </div>
                : <div className='flex gap-2'>
                    <NavLink className='submit-btn' to='/login'>Login</NavLink>
                    <NavLink className='submit-btn' to='/sign-up'>Sign Up</NavLink>
                </div>
            }</div>
        </div>
    )
}
export default Header