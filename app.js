const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error,response, body){
    var data = JSON.parse(body);
    var price = data.last;
    res.send("<p>The price of BitCoin is "+ price + " </p>");
  })
});
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
