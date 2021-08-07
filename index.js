//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require('colors');

const generateTeam = require ('./src/generateTeamHtml')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

const engineerQuestions = [
    {
        type: 'input',        
        message: `Engineer's name?'` .brightMagenta,
        name: 'name'
    },
    {
        type: 'input',        
        message: `Engineer's id?` .brightMagenta,
        name: 'id'
    },
    {
        type: 'input',
        message: `Engineer's email?` .brightMagenta,
        name: 'email',        
    },
    {
        type: 'input',
        message: `Engineer's GitHub username?` .brightMagenta,
        name: 'github',        
    }
];

const continueQuestions = [
    {   type: 'rawlist',
        message: 'Add one of the following or Exit (Generate HTML)',
        choices: ['Add Engineer', 'Add Intern', 'Exit (Generate HTML)'],
        name: 'continueOrExit'
    }

];

function  addEmployee() {
    inquirer
        .prompt(continueQuestions)
        .then(answer => {
            if (answer.continueOrExit ==='Add Engineer' ) {
            addEngineer();
           }
           if (answer.continueOrExit ==='Add Intern' ) {
            addIntern();
           } 
           if (answer.continueOrExit ==='Exit (Generate HTML)') {
            writeToFile("./dist/index.html", generateTeam.generateTeamHtml(employees));
            // writeToFile("./dist/index.txt", JSON.stringify(employees));
           }
    });
}

function  addEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then(({ name, id, email, github }) =>{
        employees.push(new Engineer(name, id, email, github))        
        addEmployee()
    });

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log(' HTML file created!' .brightYellow)
    });
}


// TODO: Create a function to initialize app
function init() {
    console.log(`Please answer the following questions` .brightYellow)
    inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNo }) =>{
        employees.push(new Manager(name, id, email, officeNo))        
        addEmployee()        
    });
}


// Function call to initialize app
init();
