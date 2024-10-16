export function validateEmail(email) {
    var data = email
    var atPosition = data.indexOf("@");
    var dotPosition = data.indexOf(".")

    if(atPosition < 3 || dotPosition < atPosition+2 || dotPosition+2>=data.length){
        return false
    }
    else{
        return true
    }
}