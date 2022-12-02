import {Application} from "express";
import userRouter from "./api/user.route";

class AppRouter {
    constructor(private app: Application) {
    }

    init() {
        this.app.get('/', (_req, res) => {
            res.send('Api running...')
        })
        this.app.use('/api/auth', userRouter)
    }
}

export default AppRouter