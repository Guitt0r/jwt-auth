import {Router} from "express";
import {tryCatch} from "../../middlewares/tryCatch.middleware";
import userController from "../../controllers/user.controller";
import {genericValidation} from "../../middlewares/genericValidation.middleware";
import {userSchema} from "../../schemas/user.schema";
import {protect} from "../../middlewares/auth-protect.middleware";


const userRouter = Router()

userRouter.post('/login',
    genericValidation(userSchema),
    tryCatch(userController.login.bind(userController)))
userRouter.post('/sigh-up',
    genericValidation(userSchema),
    tryCatch(userController.sighUp.bind(userController)))

export default userRouter