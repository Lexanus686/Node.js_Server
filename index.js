const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port=3000;
const host='0.0.0.0';

let data = {};

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    if (Object.keys(data).length == 0) {
        response.status(200).json(null);
    } else {
        response.status(200).json(data);
    }
    console.log("After GET request:");
    console.log(data);
});

app.post("/", function(request, response){
    if (Object.keys(data).length != 0) {
        response.sendStatus(400);
    } else {
        data = request.body;
        response.sendStatus(200);
    }
    console.log("After POST request:");
    console.log(data);
});

app.put("/", function(request, response){
    if (Object.keys(data).length == 0) {
        response.sendStatus(400);
    } else {
        for (reqkey in request.body) {
            if (typeof data[reqkey] !== "undefined") {
                data[reqkey] = request.body[reqkey];
            }
        }
        response.sendStatus(200);
    }
    console.log("After PUT request:");
    console.log(data);
});

app.patch("/", function(request, response){
    if (Object.keys(data).length == 0) {
        response.sendStatus(400);
    } else {
        for (reqkey in request.body) {
            data[reqkey] = request.body[reqkey];
        }
        response.sendStatus(200);
    }
    console.log("After PATCH request:");
    console.log(data);
});

app.listen(port, host);