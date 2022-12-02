import {FC} from "react"
import {useAppSelector} from "../hooks/react-redux.hooks";
import {selectUser} from "../redux/user-selector";
import {Navigate} from "react-router-dom";
import avatar from '../assets/avatar.png'
import React from "react";

type Props = {}

const Profile: FC<Props> = () => {
    const user = useAppSelector(selectUser)
    debugger
    if (!user) return <Navigate to='/login'/>
    return (
        <div className='bg-black mt-12 rounded-lg text-white text-center bg-opacity-80 max-w-min mx-auto text-7xl'>
            <div className='flex justify-center p-2 w-96 mx-auto'>
                <img className='bg-white rounded-full object-fill w-80 h-80' src={user.photo || avatar} alt=""/>
            </div>
            <div>
                {user.username}
            </div>
            <div>
                {user.email}
            </div>
        </div>
    )
}
export default Profile