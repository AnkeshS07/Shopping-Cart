

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
           /^[a-zA-Z_\.\-0-9]+[@][a-z]{3,6}[.][a-z]{2,4}$/

        );
}
const passwordValidate = function (value) {
    let regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]{8,15})$/
    return regex.test(value)
}
const validName = (name) => {
    return String(name)
        .toLowerCase()
        .match(/^[a-zA-Z ]+$/)

           
}




module.exports = { isValid, validateEmail,passwordValidate ,validName}