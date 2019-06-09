const Validator = require("validator")
const isEmpty = require("is-empty")

/**
 * Validating the sign in
 */
module.exports = function validateRegisterInput(data) {
  let errors = {}
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email krävs'
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Angiven mailadress och lösenord matchar inte. Försök igen.'
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Lösenord krävs'
  }
return {
    errors,
    isValid: isEmpty(errors)
  }
}