const inquirer = require('inquirer');
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require('fs');
const shapes = require('./lib/shapes.js');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
//global variable
let shape = '';


//questions
inquirer.prompt([
    {
        name: 'text',
        message: 'Enter 3 characters.',
        type: 'maxlength-input',
        maxLength: 3
    },
    {
        name: 'tcolor',
        message: "What color do you want your text to be?",
        type: 'input'
    },
    {
        name: 'shape',
        message: 'Choose a shape',
        type: 'list',
        choices: ['circle','square','triangle']
    },
    {
        name: 'scolor',
        message: 'pick a color for the shape',
        type: 'input'
    }
]).then(answers => {
    selectShape(answers.shape, answers.scolor);
    generateSVG(answers.tcolor, answers.text);
})

function selectShape(type, color) {
    if (type === 'circle' ){
        shape = new shapes.Circle(color);
    };
    if (type === 'square'){
        shape = new shapes.Square(color);
    };
    if (type === 'triangle'){
        shape = new shapes.Triangle(color);
    };
}




function generateSVG(tcolor, text) {
    let template =
    "<svg version=\"1.1\"" +
    "\t width=\"300\" height=\"200\""+
    "\txmlns=\"http://www.w3.org/2000/svg\">" +
    `\n${shape.dimensions}` +
    `\n<text x="150" y="120" font-size="40" text-anchor="middle" fill="${tcolor}">${text}</text>` +
    "</svg>"
    ;
    renderSVG(template);
}

function renderSVG(template){
    fs.writeFile('logo.svg', template, function(err){
        if (err) throw err;
        console.log('Saved!');
    })
};