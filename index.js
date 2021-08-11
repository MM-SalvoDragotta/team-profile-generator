//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//https://www.npmjs.com/package/colors
const colors = require('colors');

const validateEmail = require('email-validator');

const generateTeam = require ('./src/generateTeamHtml')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var employees = [];

const managerQuestions = [
    {
        type: 'input',        
        message: `Manager's name?'` .brightMagenta,
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid name." .red}
        }
    },
    {
        type: 'input',        
        message: `Manager's id?` .brightMagenta,
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid id." .red }
        }
    },
    {
        type: 'input',
        message: `Manager's email?` .brightMagenta,
        name: 'email',
        validate: (value) => {
            if (validateEmail.validate(value)) {
                return true
            } else { return 'Please enter a valid email'.red }
        }      
    },
    {
        type: 'input',
        message: `Manager's office number?` .brightMagenta,
        name: 'officeNo', 
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid office number." .red }
        }      
    }
];

const engineerQuestions = [
    {
        type: 'input',        
        message: `Engineer's name?'` .brightMagenta,
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid name." .red}
        }
    },
    {
        type: 'input',        
        message: `Engineer's id?` .brightMagenta,
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid id." .red }
        }
    },
    {
        type: 'input',
        message: `Engineer's email?` .brightMagenta,
        name: 'email',
        validate: (value) => {
            if (validateEmail.validate(value)) {
                return true
            } else { return 'Please enter a valid email'.red }
        }             
    },
    {
        type: 'input',
        message: `Engineer's GitHub username?` .brightMagenta,
        name: 'github',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid github account." .red }
        }        
    }
];

const internQuestions = [
    {
        type: 'input',        
        message: `Intern's name?'` .brightMagenta,
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid name." .red}
        }
    },
    {
        type: 'input',        
        message: `Intern's id?` .brightMagenta,
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid id." .red }
        }
    },
    {
        type: 'input',
        message: `Intern's email?` .brightMagenta,
        name: 'email',
        validate: (value) => {
            if (validateEmail.validate(value)) {
                return true
            } else { return 'Please enter a valid email'.red }
        }        
    },
    {
        type: 'input',
        message: `Intern's School?` .brightMagenta,
        name: 'school',  
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter a valid School." .red }
        }      
    }
];

const continueQuestions = [
    {   type: 'rawlist',
        message: 'Add one of the following Employees or Exit (Generate HTML)'.underline.brightGreen,
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
           if (answer.continueOrExit ==='Add Intern') {
            addIntern();
           } 
           if (answer.continueOrExit ==='Exit (Generate HTML)') {
            //    console.log(employees)
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

function  addIntern() {
    inquirer
    .prompt(internQuestions)
    .then(({ name, id, email, school }) =>{
        employees.push(new Intern(name, id, email, school))        
        addEmployee()
    });
}

// Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log(' HTML file created!' .brightYellow)
    });
}

//Create a function to initialise app
function init() {
    console.log(`Please answer the following questions` .brightYellow)
    inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNo }) =>{
        employees.push(new Manager(name, id, email, officeNo))        
        addEmployee()        
    });
}

// Function call to initialise app
init();
