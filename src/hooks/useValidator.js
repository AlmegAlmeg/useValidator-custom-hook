import { useState } from "react"
import Joi from 'joi-browser'

export default function useValidator(formValues, schema) {
    const [values] = useState({ ...formValues })
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const { name, value } = e.target
        values[name] = value
    }
    
    const validateForm = () => {
        const currentErrors = { ...errors }
        for(const property in errors){
            currentErrors[property] = ''
        }
        setErrors(currentErrors)
        const { error } = Joi.validate(values, schema, { abortEarly: false })
        if(!error) return true
        error.details.forEach(err => {
            currentErrors[err.path] = createCustomError(err.type)
        })
        setErrors(currentErrors)
        return false
    }

    return { values, errors, handleChange, validateForm }
}

const createCustomError = (type) => {
    switch (type){
        case 'any.empty':
            return 'שדה זה הינו חובה'
        case 'string.min':
            return 'Too short, try something longer...'
        case 'string.email':
            return 'Please provide a valid email'
        case 'string.max':
            return 'A little bit too much, try shorter...'
        case 'string.regex.base':
            return 'אל תהיה עומר....'
        default: 
            return ''
    }
}