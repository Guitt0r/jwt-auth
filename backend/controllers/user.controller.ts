import AuthService from "../services/user-auth.service";
import {Request, Response} from "express";

class UserController {
    constructor(private authService: AuthService) {
    }

    async sighUp(_req: Request, res: Response) {
        return this.authService.signUp(_req.body)
    }

    async login(_req: Request, res: Response) {
        return this.authService.login(_req.body)
    }
}

const userController = new UserController(new AuthService())

export default userController