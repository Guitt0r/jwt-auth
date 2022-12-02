import {Schema, model} from 'mongoose'
import {IUser} from "../types/IUser";

const userSchema = new Schema<IUser>({
        email: {type: String, unique: true, required: true},
        username: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        photo: {type: String, default: null},
    },
    {timestamps: true}
)
const user = model<IUser>('User', userSchema)

export default user