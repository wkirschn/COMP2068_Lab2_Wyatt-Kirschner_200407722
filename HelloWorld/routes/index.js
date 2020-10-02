'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log(req);
    console.log(req.query.method);
    console.log(req.query.x);
    console.log(req.query.y);
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var method = req.query.method;
    // calculate function takes 3 parameters method, x,y
    //parse x and y
    //parseFloat(x)

   calculate(method, x, y);
    function calculate(method, x, y) {
        var answer;

        console.log("Method: " + method)
        console.log("X: " + x);
        console.log("Y: " + y);

        if (method == "addition") {
            answer = x + y;
            console.log(x + " " + method + " " + y + " = " + answer);
        }
        else if (method == "subtract") {
            answer = x - y;
            console.log(x + " " + method + " " + y + " = " + answer);

        }
        else if (method == "multiply") {
            answer = x * y;
            console.log(x + " " + method + " " + y + " = " + answer);

        }
        else if (method == "divide") {
            answer = x / y;
            console.log(x + " " + method + " " + y + " = " + answer);
        }
        else {
            console.log("Error, unknown method used!");
        }


        //Check if add, substract, multiply, or divide. If not, display error.
        // If method = add, x+y
    }

    // call calultation function


    //req = request
    //res = response
    //Send response




    res.render('index', { title: 'Express' });
});

module.exports = router;
