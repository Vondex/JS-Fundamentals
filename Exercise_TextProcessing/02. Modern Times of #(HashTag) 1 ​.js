function solve (str) {
    let string = str.split(' ');
    let text = '';
 
    for(let word of string) {
        if (word.length > 1 && word[0] == '#') {
            for(let i = 1; i < word.length; i++ ) {
                let code = word[i].charCodeAt(0);
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    text += word[i];
                }else{
                    text = '';
                    break;
                }
 
            }
            if(text.length > 0) {
            console.log(text);
            text = '';
            }
        }
    }
 
}
