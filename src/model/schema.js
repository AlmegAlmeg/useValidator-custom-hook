import Joi from 'joi-browser'

export const userSchema = {
    username: Joi.string(),
    password: Joi.string().min(6).max(16).regex(new RegExp('^[a-zA-Z0-9]{6,16}$')).required()
}

export const fullUserSchema = {
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email: Joi.string().min(4).email().required(),
    password: Joi.string().min(6).max(16).regex(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
    passwordconfirm: Joi.string().min(6).max(16).regex(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
}