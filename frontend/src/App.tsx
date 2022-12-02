import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "./hooks/react-redux.hooks";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile";
import {setInitialize} from "./redux/app-reducer";
import {selectIsInitialize} from "./redux/app-selector";
import React from "react";

const App = () => {
    const dispatch = useAppDispatch()
    const isInitialize = useAppSelector(selectIsInitialize)
    useEffect(() => {
        dispatch(setInitialize())
    }, [isInitialize])
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/' element={<Profile/>}/>
            </Routes>
            <ToastContainer position={"top-center"}/>
        </div>
    )
}
export default App