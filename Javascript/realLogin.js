let isValid = true
const password = document.getElementById("password")
const ConfirmPassword = document.getElementById("ConfirmPassword")
const signup = document.getElementById("signup")

function isValidCredentials(){
    isValid = true
    const value = password.value
    const confirmValue = ConfirmPassword.value
    const containLowerCase = /[a-z]/.test(value)
    const containUpperCase = /[A-Z]/.test(value)
    const containNumbers = /[0-9]/.test(value)
    const containSpecial = /[^a-zA-Z0-9]/.test(value)
    const emailvalue = email.value
    if(!emailvalue){
        window.alert("The Email field is empty")
        isValid = false
        return isValid
    }
    if(!emailvalue.includes('@') || !emailvalue.includes(".com")){
        window.alert("Invalid Email")
        isValid = false
        return isValid
    }

    if(!value){
        window.alert("The Password Field is empty!!")
        isValid = false
        return isValid
    }
    if(value.length < 8){
        window.alert("Password length is less than 8 charchters")
        isValid = false
        return isValid
    }
    if(!(containLowerCase && containUpperCase && containNumbers && containSpecial)){
        window.alert("Password is invalid!!")
        isValid = false
        return isValid
    }
    if(value !== confirmValue){
        window.alert("Passwords don't match")
        isValid = false
    }
    if(isValid){
        window.alert("Password is confirmed")
        password.value = ''
        email.value = ' '
        ConfirmPassword.value = ''
        return isValid
    }
}

signup.addEventListener('click', isValidCredentials)