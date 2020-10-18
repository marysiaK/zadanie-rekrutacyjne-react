import validator from 'validator';

export const userDataValid = ({ name, surname, age }) => {
    return (isTextValueValid(name) && !validator.isEmpty(name))
        && (isTextValueValid(surname) && !validator.isEmpty(surname))
        && (isNumberValueValid(age) && !validator.isEmpty(age))
}

export const isTextValueValid = (value) => {
    return value !== undefined && !containsNumbers(value)
}

export const isNumberValueValid = (value) => {
    return value !== undefined && !containsLetters(value)
}

export const isAdult = (age) => {
    return age >= 18
}

export const containsNumbers = (text) => {
    if (text === undefined) return false
    if (validator.isNumeric(text)) return true

    for (let letter of text) {
        if (validator.isNumeric(letter)) return true
    }
    return false
}

export const containsLetters = (text) => {
    if (text === undefined) return false
    if (validator.isNumeric(text)) return false

    for (let letter of text) {
        if (!validator.isNumeric(letter)) return true
    }
    return false
}