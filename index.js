//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require('colors');

const generateTeam = require ('./src/generateTeamHtml')

var employees = [];

const managerQuestions = [
    {
        type: 'input',        
        message: `Manager's name?'` .brightMagenta,
        name: 'name'
    },
    {
        type: 'input',        
        message: `Manager's id?` .brightMagenta,
        name: 'id'
    },
    {
        type: 'input',
        message: `Manager's email?` .brightMagenta,
        name: 'email',        
    },
    {
        type: 'input',
        message: `Manager's office number?` .brightMagenta,
        name: 'officeNo',        
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log(' HTML file created!' .brightYellow)
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log(`Please answer the following questions` .brightYellow)
    inquirer.prompt(managerQuestions)
    .then(function (data) {
        // console.log(data)
        writeToFile("./dist/index.html", markdown.generateMarkdown(data));
    });
}


// Function call to initialize app
init();
