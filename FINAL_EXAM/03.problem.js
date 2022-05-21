function solve(input){
    let catalog = {}
    let sentMsg = 0;
    let receivedMsg = 0;

    let n = Number(input.shift())

    for (let i = 0; i < n; i++){
        let [username, sent, received] = input.shift().split('=')
        catalog[username] = {
            sent: sentMsg,
            received: receivedMsg
        };
    }
    while (input[0] != 'Statistics'){
        let tokens = input.shift().split('=')
        let command = tokens[0];
        let username = tokens[1];

        if (command == 'Add'){
            if (catalog[username] == username){
                
            } else {
                catalog[username] = {
                    sent: sentMsg += Number(tokens[2]),
                    received: receivedMsg += Number(tokens[3])

                };
                
            }
        }
    }
}

         
