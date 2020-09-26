var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: function(answer){
            if(!answer) {
            console.log("Please enter your name")
            return false
            }
            return true
        }
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stak",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ]
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
            "email",
            "phone",
            "telekinesis"  
        ]
    }
])
.then(function(response) {
    console.log(response)
    console.log(JSON.stringify(response))
    var filename = response.name.toLowerCase().split(" ").join("") + ".json";

    fs.writeFile(filename, JSON.stringify(response, null, '\t'), function(err){

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});
