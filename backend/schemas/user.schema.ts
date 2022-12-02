import Joi from "joi";

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().max(20),
    password: Joi.string().min(8).required(),
    photo: [Joi.string().uri().optional(), Joi.allow(null)],
})