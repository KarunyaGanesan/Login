const express = require("express");
const app = express();

var name = 'Karunya' 
var pass = '0000'   

app.get('/login', (req, res) => {
    if (name === req.query.username && pass === req.query.password) {
       
        res.send(`
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        
                    .message {
                        padding: 40px;
                        background: linear-gradient(135deg, powderblue, purple);
                        color: white;
                        border-radius: 10px;
                        text-align: center;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h1>Login Successful</h1>
                </div>
            </body>
            </html>
        `);
    } else {
       
        res.send(`
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        
                    }
                    .message {
                        padding: 40px;
                        background: linear-gradient(135deg, red,orangered);
                        color: white;
                        border-radius: 10px;
                        text-align: center;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h1>Login Failed</h1>
                </div>
            </body>
            </html>
        `);
    }
});

app.listen(3000, function() {
    console.log("Server Started...");
});
