const validateEmail = function(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    
    return (false)
}

// const validateInput = function(input) {
//     if (input) {
//         return true;
//     }

//     return false;
// }

// const validateForm = function(email, input) {
//     if (validateEmail(email) && validateInput(input)) {
//         return true;
//     }

//     return false;
// }