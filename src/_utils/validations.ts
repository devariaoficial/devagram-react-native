const validateName = (name: string) : boolean => {
    return name.length > 2
}

const validateEmail = (email: string) : boolean => {
    return email.length > 5 && email.includes("@") && email.includes(".")
}

const validatePassword = (password: string) : boolean => {
    return password.length > 3
}

const validateConfirmPassword = (password: string, confirmPassword: string) : boolean => {
    return password === confirmPassword
}

export {validateName, validateEmail, validatePassword, validateConfirmPassword}