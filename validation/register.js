const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Namn måste fyllas i'
    }
    
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email måste fyllas i'
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email är ogiltig'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Lösenord måste fyllas i'
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Lösenordet måste fyllas i två gånger'
    }

    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = 'Lösenordet måste vara minst 6 karaktärer'
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Lösenorden måste matcha'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}