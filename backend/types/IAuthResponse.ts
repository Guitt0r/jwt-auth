import {Request} from "express";
import {JwtPayload} from "jsonwebtoken";

export interface IAuthRequest extends Request {
    user: string | JwtPayload
}