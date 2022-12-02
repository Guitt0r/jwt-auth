import axios from "axios";
import {User} from "../types/user.type";

export const $api = axios.create({
    baseURL: 'http://localhost:4200/api/'
})

export enum StatusCodes {
    Success = 0,
    Failed = 1
}

type LoginSignUpResponse = {
    accessToken: string | null,
    statusCode: StatusCodes,
    message: string | null,
    user: User | null
}

export const authAPI = {
    async signUp(email: string, username: string, password: string) {
        const res = await $api.post<LoginSignUpResponse>('/auth/sigh-up', {email, username, password})
        const {accessToken, ...info} = res.data
        if (res.data.accessToken) {
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        }
        return info
    },
    async login(email: string, password: string) {
        const res = await $api.post<LoginSignUpResponse>('/auth/login', {email, password})
        const {accessToken, ...info} = res.data
        if (res.data.accessToken) {
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        }
        return info
    },
}