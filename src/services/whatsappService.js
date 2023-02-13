const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/101918129491323/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAu9D3Ks0dEBAGAtc1MG3YhSmg2jWTZAUvdoRbWRMEGYxD86gws7HOBAe7DK7rsnnZAlRZBZAh4066n6MZCqevDT8VICdvDUk9cGiXbGUZB0eDifQcQNromucyyHOZCJM5DzvEyMZAp3xvaPTPgU0PwQcHNZB7ljDZCTT7yw4c3zKMZAhB1UDP0mKUS"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};