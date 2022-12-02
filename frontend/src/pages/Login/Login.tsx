import React, {FC} from 'react';
import {useForm, Resolver} from 'react-hook-form';
import {login} from "../../redux/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/react-redux.hooks";
import {Navigate, NavLink} from "react-router-dom";
import {selectUser} from "../../redux/user-selector";

type FormValues = {
    email: string,
    password: string
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email && values.password ? values : {},
        errors: {},
    };
};
type Props = {}

const Login: FC<Props> = () => {
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver});
    const onSubmit = handleSubmit(async (data) => {
        await dispatch(login(data.email, data.password))
    });
    if (user) return <Navigate to='/'/>
    return (
        <div
            className='max-w-min mx-auto mt-20  card'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <form onSubmit={onSubmit}>
                <div className='m-1'>
                    <input className='input' type='email'
                           {...register("email")} placeholder="Email"/>
                    {errors?.email && <p>{errors.email.message}</p>}
                </div>
                <div className='m-1'>
                    <input className='input' type='password'
                           {...register("password")} placeholder="Password"/>
                    {errors?.password && <p>{errors.password.message}</p>}
                </div>
                <div className='m-1 flex justify-center'>
                    <input
                        className='submit-btn' type="submit" value='Submit'/>
                </div>
            </form>
            <div className='text-right'>
                Don't have an account?
                <NavLink className=' italic underline' to='/sign-up'>Signup now!</NavLink>
            </div>
        </div>
    );
}
export default Login