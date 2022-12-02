export interface IUser extends Document{
    email: string,
    username: string,
    password: string,
    photo: string,
    _doc:any
}