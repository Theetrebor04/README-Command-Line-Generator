// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message: "What is your GitHub username?",
        name: "UserName",
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is the title for your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please give a description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What necessary dependencies must be installed to run this app?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is the app used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "What license was used for the README?",
        name: "Licence",
    },
    {
        type: "input",
        message: "Please add contributors.",
        name: "Contributor",
    },
    {
        type: "input",
        message: "What command do you use to tes this app?",
        name: "Test",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("YourREADME.md", generateMarkdown(data));
    })
  }


// Function call to initialize app
init();
