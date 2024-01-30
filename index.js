// Creating essential constants
const fs = require('fs');
const inquirer = require("inquirer");

// Creating constant with shapes parameters 

const {Square, Triangle, Circle} = require("./lib/shapes");

// Creating constructor class function, for logo render

class svgLogo {

    constructor(){
        this.textElement = ""
        this.shapeElement = ""

    }

    render(){
        
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200" height="200">${this.shapeElement}${this.textElement}</svg>`
     
    }

    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    setShapeElement(shape){
        this.shapeElement = shape.render()
    }

};

// Creating constant for array of questions to be asked in terminal

const questions = [{

    type: "input", 
    name: "text",
    message: "Enter up to 3 text characters for svg logo:"
}, {
    
    type: "input",
    name: "text-color",
    message: "Enter a color keyword, or hexadecimal number for svg logo's text:"
}, {

    type: "list",
    name: "pixel-image",
    message: "Which pixel image would you like?",
    choices: ["Square", "Triangle", "Circle"]
}, {
    
    type: "input",
    name: "shape",
    message: "Enter a color keyword, or hexadecimal number for svg logo's shape:"

},
];

// Creating function to write logo file (logo.svg)

function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" fileName + "]")

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your logo.svg file was generated.")
    });

};

// Creating function to initialize app

