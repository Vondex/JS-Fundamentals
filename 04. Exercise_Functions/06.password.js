function passwordFunction (password){
    function isLength (string){
        if (string.length >= 6 && string.length <= 10){
            return true;
        } else {
            return false;
        }
    }
    function consists (string){
        for (let char of string){
            let charCode = char.charCodeAt(0)
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode>=65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)){
                    return;


            } 
        }
        return true;
    }
    function hasdigits (string){
        let counter = 0;
        for (char of string){
            let charCode = char.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57){
                counter++;
            }

        }
        if (counter >= 2){
            return true;
        } else {
            return false;
        }
    }
    let validLength = isLength(password);
    let containsLettandDig = consists(password);
    let isWithDigits = hasdigits(password);
    if (validLength && containsLettandDig && isWithDigits){
        console.log('Password is valid');
    } 
    if (!validLength){
        console.log('Password must be between 6 and 10 characters')
    } 
    if (!containsLettandDig){
        console.log('Password must consist only of letters and digits');

    } 
    if (!isWithDigits){
        console.log('Password must have at least 2 digits');
    }
}
