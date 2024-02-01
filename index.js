// Creating essential constants
const fs = require("fs");
const inquirer = require("inquirer");

// Creating constant with shape parameters 

const {Square, Triangle, Circle} = require("./lib/shapes");

// Creating constructor class function, for logo render

class svgLogo {

    constructor(){
        this.textElement = ""
        this.shapeElement = ""

    }

    render(){
        
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
     
    }

    setTextElement(text, color){
        this.textElement = `<text x="150" y="135" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
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
    name: "shape-type",
    message: "Which pixel image would you like?",
    choices: ["Square", "Triangle", "Circle"]
}, {
    
    type: "input",
    name: "shape-fill",
    message: "Enter a color keyword, or hexadecimal number for svg logo's shape:"

},
];

// Creating function to write logo file (logo.svg) same as README.md homework

function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("Success! Your logo.svg file was generated.")
    });

};

// Creating a async function to init(ialize) app, like instructor told us in class of js being single threaded, this will trigger init and then pull the writeToFile function above at the end to make logo.svg file

async function init() {
    
    // Using var vs. let to organize better like instructor mentioned, and also knowing var can be used for global callback 
	var svgString = "";
	let svgFile = "logo.svg";

    // Prompt questions
    const answers = await inquirer.prompt(questions);

	// Character input and acceptance 
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		
        user_text = answers.text;

	} else {

        console.log("Invalid Character rule! Enter 1-3 characters only.");
    
        return;
    }
    
	user_font_color = answers["text-color"];

	user_shape_fill = answers["shape-fill"];
	
	user_shape_type = answers["shape-type"];

	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		
        user_shape = new Square();	
	}

	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		
        user_shape = new Circle();
	}

	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		
        user_shape = new Triangle();
	}

	user_shape.setColor(user_shape_fill);


	// Creating var for class svgLogo, data inputs which will be written to file logo.svg
	var svg = new svgLogo();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	

    // Writing file, svgFile (name) and svgString (data to render logo)
	writeToFile(svgFile, svgString); 
};

init();